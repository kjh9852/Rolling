import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;
  padding: 0;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;
  z-index: 20;
  @media (max-width: 768px) {
    max-width: 500px;
  }
  @media (max-width: 560px) {
    max-width: 350px;
  }
`;

export default function Modal({ children, ...props }) {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate('..');
  };

  return (
    <>
      <BackDrop onClick={handleCloseModal}> </BackDrop>
      <Dialog open>{children}</Dialog>
    </>
  );
}
