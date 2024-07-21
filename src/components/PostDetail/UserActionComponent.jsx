import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import styled, { css } from 'styled-components';
import EmojiBadge from '../common/EmojiBadge';
import OutlineButton from '../common/OutlineButton';
import emojiAddIcon from '../../assets/image/emoji_add_icon.png';
import shareIcon from '../../assets/image/share_icon.png';
import arrowIcon from '../../assets/image/arrow_down.png';

const ActionContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
`;

const ListContainer = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ArrowBtnContainer = styled.div`
  button {
    padding: 10px;
    cursor: pointer;
    img {
      ${({ isOpen }) =>
        isOpen
          ? css`
              transform: rotate(180deg);
            `
          : css`
              transform: rotate(0deg);
            `}
      transition: transform 0.3s ease;
    }
  }
`;

const AllReactionContainer = styled.ul`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2.4rem;
  transform: translate(-28rem, 5px);
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  gap: 10px 8px;
  background: var(--white);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  height: 100%;
`;

const EmojiContainer = styled.div`
  position: relative;
  height: 100%;

  &:before {
    position: absolute;
    content: '';
    width: 1px;
    height: 28px;
    top: 5px;
    right: -14px;
    background: #ededed;
  }
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

const ShareContainer = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 40px;
    right: 0px;
  }
  ul {
    width: 140px;
    padding: 10px 0;
    background: var(--white);
    border-radius: 8px;
    border: 1px solid #cccccc;
  }
  ul > li {
    &:hover {
      background: #f6f6f6;
    }
  }
  ul > li > button {
    width: 100%;
    text-align: left;
    font-size: 1.6rem;
    padding: 12px 16px;
    cursor: pointer;
  }
`;

export default function UserActionComponent({
  actionEmoji,
  topReaction,
  shareName,
}) {
  const { Kakao } = window;
  const navigate = useNavigate();
  const { postId } = useParams();
  const [openReaction, setOpenReaction] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isThrottled, setIsThrottled] = useState(false);
  const [isSharedOpen, setIsSharedOpen] = useState(false);
  const location = useLocation();

  const handleSharedOpen = () => {
    setIsSharedOpen((prevOpen) => !prevOpen);
  };

  const handleOpenReaction = () => {
    setOpenReaction((prevOpen) => !prevOpen);
  };

  const handleEmojiOpen = (e) => {
    setShowEmoji((prevOpen) => !prevOpen);
  };

  const handleEmojiClick = async (e) => {
    const newReaction = e.unified;
    if (isThrottled) return;

    setIsThrottled(true);
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
      navigate(`/post/${postId}`, { replace: true });
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setIsThrottled(false);
      }, 1000);
    }
  };

  const emojiContents =
    actionEmoji.count > 0 ? (
      topReaction.map((list) => (
        <EmojiBadge
          key={list.id}
          emojiCode={list.emoji}
          emojiCount={list.count}
        />
      ))
    ) : (
      <span>반응을 추가해보세요!</span>
    );

  const baseUrl = 'https://8team-rolling.netlify.app';
  const nowUrl = location.pathname;

  console.log(process.env.REACT_APP_KAKAO_SHARE_KEY);
  const handleShareKaKao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
      }
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Rolling',
          description: `${shareName}님에게 롤링페이퍼를 써보세요`,
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: `${baseUrl}${nowUrl}`,
            webUrl: `${baseUrl}${nowUrl}`,
          },
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  };
  return (
    <ActionContainer>
      <ListContainer>
        {emojiContents}
        <ArrowBtnContainer isOpen={openReaction}>
          <button onClick={handleOpenReaction}>
            <img src={arrowIcon} alt='활성화 버튼' />
          </button>
          {openReaction && (
            <AllReactionContainer>
              {actionEmoji.results.map((list) => (
                <EmojiBadge
                  key={list.id}
                  emojiCode={list.emoji}
                  emojiCount={list.count}
                />
              ))}
            </AllReactionContainer>
          )}
        </ArrowBtnContainer>
      </ListContainer>
      <ButtonContainer>
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
        <ShareContainer>
          <ShareBtn
            haveImg={true}
            imgSrc={shareIcon}
            onClick={handleSharedOpen}
          />
          {isSharedOpen && (
            <div>
              <ul>
                <li>
                  <button onClick={handleShareKaKao}>카카오톡 공유</button>
                </li>
                <li>
                  <button>URL 공유</button>
                </li>
              </ul>
            </div>
          )}
        </ShareContainer>
      </ButtonContainer>
    </ActionContainer>
  );
}
