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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;
  z-index: 21;
`;

export default function Modal({ children, ...props }) {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate('..');
  };

  return (
    <>
      <BackDrop onClick={handleCloseModal} />
      <Dialog open>{children}</Dialog>
    </>
  );
}
