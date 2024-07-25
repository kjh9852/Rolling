import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import styled, { css, keyframes } from 'styled-components';
import { postEmoji } from '../../util/api';
import EmojiBadge from '../common/EmojiBadge';
import OutlineButton from '../common/OutlineButton';
import emojiAddIcon from '../../assets/image/emoji_add_icon.png';
import shareIcon from '../../assets/image/share_icon.png';
import arrowIcon from '../../assets/image/arrow_down.png';
import Toast from '../../ui/Toast';
const ActionContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
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
      ${({ $isOpen }) =>
        $isOpen
          ? css`
              transform: rotate(180deg);
            `
          : css`
              transform: rotate(0deg);
            `}
      transition: transform 0.3s ease;
    }
    @media (max-width: 768px) {
      padding: 0;
      padding-right: 8px;
    }
  }
`;
const OpenReactionCard = styled.div`
  position: absolute;
  top: 4.2rem;
  right: 0;
  padding: 2.4rem;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: var(--white);
  z-index: 2;
  @media (max-width: 768px) {
    top: 3.2rem;
    padding: 1.6rem;
  }
`;
const ReactionContainer = styled.ul`
  display: grid;
  ${({ isColumn }) =>
    isColumn <= 4
      ? `
    grid-template-columns: repeat(${isColumn}, auto);
    `
      : `
  grid-template-columns: repeat(4, auto);
   `};
  @media (max-width: 1248px) {
    ${({ isColumn }) =>
      isColumn <= 3
        ? `
    grid-template-columns: repeat(${isColumn}, auto);
    `
        : `
  grid-template-columns: repeat(3, auto);
   `};
  }
  gap: 10px 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2.8rem;
  height: 100%;
  @media (max-width: 768px) {
    gap: 2.4rem;
  }
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
    @media (max-width: 768px) {
      top: 3px;
      right: -13px;
    }
  }
`;
const EmojiBtn = styled(OutlineButton)`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 4px;
  font-size: 1.6rem;
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 5px 8px;
    span {
      display: none;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
const ShareBtn = styled(OutlineButton)`
  height: 100%;
  font-size: 0;
  @media (max-width: 768px) {
    padding: 5px 8px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const EmptyText = styled.span`
  font-size: 1.8rem;
`;

const ShareButtons = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  height: 0px;
  @media (max-width: 768px) {
    top: 35px;
  }
  ul {
    width: 140px;
    padding: 10px 0;
    overflow: hidden;
    background: var(--white);
    border-radius: 8px;
    border: 1px solid #cccccc;
    transition: all.3s ease;
    ${({ $isSharedOpen }) =>
      $isSharedOpen
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
  li {
    &:hover {
      background: #f6f6f6;
    }
  }
  li > button {
    width: 100%;
    text-align: left;
    font-size: 1.6rem;
    padding: 12px 16px;
    cursor: pointer;
  }
`;

const ShareContainer = styled.div`
  position: relative;
`;
export default function UserActionComponent({
  actionEmoji,
  topReaction,
  shareName,
}) {
  const { Kakao } = window;
  const { postId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [openReaction, setOpenReaction] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [isThrottled, setIsThrottled] = useState(false);
  const [isSharedOpen, setIsSharedOpen] = useState(false);
  const [isClipBoard, setIsClipBoard] = useState('');
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
      await postEmoji(postId, newReaction);
      navigate(`/post/${postId}`, { replace: true });
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setIsThrottled(false);
      }, 1000);
    }
  };

  const nowUrl = location.pathname.includes('/edit')
    ? location.pathname.replace('/edit', '')
    : location.pathname;
  const handleShareKaKao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
      }
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `To. ${shareName}`,
          description: `${shareName}님에게 롤링페이퍼를 써보세요`,
          imageUrl: `${process.env.REACT_APP_BASE_URL}/kakao_shared.jpg`,
          link: {
            mobileWebUrl: `${process.env.REACT_APP_BASE_URL}${nowUrl}`,
            webUrl: `${process.env.REACT_APP_BASE_URL}${nowUrl}`,
          },
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: `${process.env.REACT_APP_BASE_URL}${nowUrl}`,
              webUrl: `${process.env.REACT_APP_BASE_URL}${nowUrl}`,
            },
          },
          {
            title: '앱으로 이동',
            link: {
              mobileWebUrl: `${process.env.REACT_APP_BASE_URL}${nowUrl}`,
              webUrl: `${process.env.REACT_APP_BASE_URL}${nowUrl}`,
            },
          },
        ],
      });
    }
  };
  const resetClipBoard = () => {
    setIsClipBoard('');
  };
  const handleShareUrl = () => {
    setIsClipBoard(`${process.env.REACT_APP_BASE_URL}${nowUrl}`);
  };
  useEffect(() => {
    if (isClipBoard) {
      try {
        navigator.clipboard.writeText(isClipBoard);
      } catch {
        console.log('복사 실패');
      }
    }
  }, [isClipBoard]);
  return (
    <ActionContainer>
      <ListContainer>
        {actionEmoji.count > 0 ? (
          topReaction.map((list) => (
            <EmojiBadge
              key={list.id}
              emojiCode={list.emoji}
              emojiCount={list.count}
            />
          ))
        ) : (
          <EmptyText>반응을 추가해보세요!</EmptyText>
        )}
        <ArrowBtnContainer $isOpen={openReaction}>
          {actionEmoji.results.length > 0 && (
            <button onClick={handleOpenReaction}>
              <img src={arrowIcon} alt='활성화 버튼' />
            </button>
          )}
          {openReaction && (
            <OpenReactionCard>
              <ReactionContainer isColumn={actionEmoji.results.length}>
                {actionEmoji.results.map((list) => (
                  <EmojiBadge
                    key={list.id}
                    emojiCode={list.emoji}
                    emojiCount={list.count}
                  />
                ))}
              </ReactionContainer>
            </OpenReactionCard>
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
            <span>추가</span>
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
          <ShareButtons $isSharedOpen={isSharedOpen}>
            <ul>
              <li>
                <button onClick={handleShareKaKao}>카카오톡 공유</button>
              </li>
              <li>
                <button onClick={handleShareUrl}>URL 공유</button>
              </li>
            </ul>
          </ShareButtons>
        </ShareContainer>
      </ButtonContainer>
      {isClipBoard && (
        <Toast isClipBoard={isClipBoard} resetClipBoard={resetClipBoard}>
          복사완료
        </Toast>
      )}
    </ActionContainer>
  );
}
