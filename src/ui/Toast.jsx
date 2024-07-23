import styled, { keyframes } from 'styled-components';
import completedIcon from '../assets/image/completed.png';
import close from '../assets/image/close.png';
import { useEffect, useState } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 0.8;
    visibility: visible;
  }
`;

const fadeOut = keyframes`
from {
  opacity: 0.8;
  visibility: visible;
}
to {
  opacity: 0;
  visibility: hidden;
}`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 7rem;
  font-size: 2rem;
  &.fade_in {
    animation: ${fadeIn} 1s ease 0s 1 normal forwards;
  }

  &.fade_out {
    animation: ${fadeOut} 1s ease 0s 1 normal forwards;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0%;
    transform: translateX(0%);
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 524px;
  height: 64px;
  background: var(--black);
  border-radius: 8px;
  padding: 0 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Message = styled.span`
  font-size: 16px;
  color: var(--white);
`;

export default function Toast({ children, isClipBoard, resetClipBoard }) {
  const [fade, setFade] = useState({ fadeAnimation: 'fade_in' });

  useEffect(() => {
    if (fade.fadeAnimation === 'fade_in') {
      const timer = setTimeout(() => {
        setFade({ fadeAnimation: 'fade_out' });
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isClipBoard]);

  useEffect(() => {
    if (fade.fadeAnimation === 'fade_out') {
      const resetTimer = setTimeout(() => {
        resetClipBoard();
      }, 1500);

      return () => clearTimeout(resetTimer);
    }
  }, [fade, isClipBoard]);

  const handleClose = () => {
    resetClipBoard();
  };

  return (
    <Container className={`${fade.fadeAnimation}`}>
      <Wrapper>
        <MessageWrapper>
          <img src={completedIcon} alt='체크아이콘' />
          <Message>URL이 복사 되었습니다.</Message>
        </MessageWrapper>
        <button style={{ cursor: 'pointer' }} onClick={handleClose}>
          <img src={close} alt='닫기아이콘' />
        </button>
      </Wrapper>
    </Container>
  );
}
