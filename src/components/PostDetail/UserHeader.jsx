import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserActionComponent from './UserActionComponent';
import MessageCount from '../common/MessageCount';
import styled from 'styled-components';
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
  gap: 57px;
  height: 36px;
`;

const CountContainer = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  ::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 28px;
    top: 2px;
    right: -29px;
    background: #ededed;
  }
  span {
    margin-left: 11px;
    font-size: 1.8rem;
  }
`;

const TotalUser = styled.li`
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
  const { postId } = useParams();
  const [userData, setUserData] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [userEmoji, setUserEmoji] = useState([]);
  const [result, setResults] = useState('');

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/${postId}/`
      );
      if (!response.ok) {
        throw new Error('데이터 불러오기 실패');
      }
      const { recentMessages, ...post } = await response.json();
      console.log(post);
      setUserData(post);
      setUserProfile(recentMessages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchEmojiCount = async (e) => {
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/${postId}/reactions/?limit=8`
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
        `https://rolling-api.vercel.app/8-8/recipients/${postId}/reactions/`,
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

  const AllWriter =
    userData.messageCount >= 9 ? '+6' : `+${userData.messageCount - 3}`;

  return (
    <UserContainer>
      <UserInfo>
        <UserName>{`To. ${userData.name}`}</UserName>
        <UserAction>
          <CountContainer>
            {userProfile.map((img) => (
              <MessageCount
                key={img.id}
                profileImageURL={img.profileImageURL}
                sender={img.sender}
              />
            ))}
            {userData.messageCount > 3 && <TotalUser>{AllWriter}</TotalUser>}
            <span>
              <b>{userData.messageCount}</b>명이 작성했어요!
            </span>
          </CountContainer>
          <UserActionComponent
            actionEmoji={userEmoji}
            showEmoji={showEmoji}
            handleEmojiOpen={handleEmojiOpen}
            handleEmojiClick={handleEmojiClick}
          />
        </UserAction>
      </UserInfo>
    </UserContainer>
  );
}
