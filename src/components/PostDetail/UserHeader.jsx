import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OutlineButton from '../common/OutlineButton';
import EmojiCount from '../common/EmojiCount';
import MessageCount from '../common/MessageCount';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import emojiAddIcon from '../../assets/image/emoji_add_icon.png';
import shareIcon from '../../assets/image/share_icon.png';
import './emoji.css';

const UserContainer = styled.div`
  position: fixed;
  top: 66px;
  left: 0;
  width: 100%;
  height: 68px;
  background: var(--white);
  z-index: 10;
  @media (max-width: 768px) {
    top: 0px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const UserName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
`;
const UserAction = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 36px;
`;

const EmojiContainer = styled.div`
  height: 100%;
`;

const EmojiBtn = styled(OutlineButton)`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 4px;
  font-size: 1.6rem;
  font-weight: 500;
`;

const ShareBtn = styled(OutlineButton)`
  height: 100%;
`;
const ListContainer = styled.ul`
  display: flex;
  gap: 8px;
`;

const CountContainer = styled.ul`
  display: flex;
  align-items: center;
  span {
    margin-left: 11px;
    font-size: 1.8rem;
  }
`;

const OverUser = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -6px;
  width: 28px;
  height: 28px;
  font-size: 12px;
  border-radius: 32px;
  border: 1px solid #e3e3e3;
  background: var(--white);
`;

export default function UserHeader() {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [userEmoji, setUserEmoji] = useState([]);
  const [result, setResults] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/${id}/`
      );
      if (!response.ok) {
        throw new Error('데이터 불러오기 실패');
      }
      const { recentMessages, ...post } = await response.json();
      setUserData(post);
      setUserProfile(recentMessages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchEmojiCount = async (e) => {
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/${id}/reactions/?limit=6`
      );
      if (!response.ok) {
        throw new Error('데이터 불러오기 실패');
      }
      const { results } = await response.json();
      setUserEmoji(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEmojiClick = async (e) => {
    const newReaction = e.unified;
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/${id}/reactions/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            emoji: newReaction,
            type: 'increase',
          }),
        }
      );
      if (!response.ok) {
        throw new Error('데이터 불러오기 실패');
      }
      const data = await response.json();
      setResults(data);
      setShowEmoji(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEmojiCount();
  }, [result]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEmojiOpen = (e) => {
    setShowEmoji((prevOpen) => !prevOpen);
  };

  const maxShowEmoji = userEmoji.slice(0, 3);

  return (
    <UserContainer>
      <UserInfo>
        <UserName>{`To.${userData.name}`}</UserName>
        <UserAction>
          <CountContainer>
            {userProfile.map((img) => (
              <MessageCount
                key={img.id}
                profileImageURL={img.profileImageURL}
                sender={img.sender}
              />
            ))}
            {userData.messageCount > 3 && (
              <OverUser>
                {userData.messageCount >= 9
                  ? '+6'
                  : `+${userData.messageCount - 3}`}
              </OverUser>
            )}
            <span>
              <b>{userData.messageCount}</b>명이 작성했어요!
            </span>
          </CountContainer>
          <ListContainer>
            {maxShowEmoji.map((list) => (
              <EmojiCount
                key={list.id}
                emojiCode={list.emoji}
                emojiCount={list.count}
              />
            ))}
          </ListContainer>
          <EmojiContainer>
            <EmojiBtn
              onClick={handleEmojiOpen}
              haveImg={true}
              imgSrc={emojiAddIcon}
            >
              추가
            </EmojiBtn>
            <EmojiPicker
              lazyLoad={true}
              open={showEmoji}
              onEmojiClick={handleEmojiClick}
              height={393}
              width={307}
            />
          </EmojiContainer>
          <ShareBtn haveImg={true} imgSrc={shareIcon} />
        </UserAction>
      </UserInfo>
    </UserContainer>
  );
}
