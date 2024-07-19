import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  ::before {
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

export default function UserActionComponent({ actionEmoji, topReaction }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [openReaction, setOpenReaction] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const handleOpenReaction = () => {
    setOpenReaction((prevOpen) => !prevOpen);
  };

  const handleEmojiOpen = (e) => {
    setShowEmoji((prevOpen) => !prevOpen);
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
      navigate(`/post/${postId}`, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ActionContainer>
      <ListContainer>
        {topReaction.map((list) => (
          <EmojiBadge
            key={list.id}
            emojiCode={list.emoji}
            emojiCount={list.count}
          />
        ))}
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
        <ShareBtn haveImg={true} imgSrc={shareIcon} />
      </ButtonContainer>
    </ActionContainer>
  );
}
