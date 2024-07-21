import styled from 'styled-components';
import completed from '../assets/image/completed.png';
import close from '../assets/image/close.png';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 524px;
  height: 64px;
  background: var(--black);
  border-radius: 8px;
  padding: 0 30px;
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

function Toast() {
  const [toast, setToast] = useState(true);

  const handleClose = () => {
    setToast(false);
  };

  const handleToast = () => {
    setToast(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
      console.log(1);
    };
  }, [toast]);

  return (
    <div>
      {toast && (
        <Wrapper>
          <MessageWrapper>
            <img src={completed} />
            <Message>URL이 복사 되었습니다.</Message>
          </MessageWrapper>
          <button onClick={handleClose}>
            <img src={close} />
          </button>
        </Wrapper>
      )}
      <button
        type='button'
        onClick={handleToast}
        style={{ border: 'solid 1px' }}
      >
        임시공유버튼
      </button>
    </div>
  );
}

export default Toast;
