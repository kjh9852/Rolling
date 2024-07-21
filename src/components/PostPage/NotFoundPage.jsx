import styled from 'styled-components';
import PrimaryButton from '../common/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 720px;
  margin: 350px auto;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const ErrorTitle = styled.h1`
  font-size: 200px;
  color: var(--error);
`;

const ErrorMessage = styled.h2`
  font-size: 35px;
`;

const ErrorButton = styled(PrimaryButton)`
  width: 30%;
  height: 60px;
  border-radius: 12px;
  font-size: 25px;
`;

function NotFoundPage() {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate(`/`);
  };

  return (
    <Container>
      <ErrorTitle>ERROR</ErrorTitle>
      <MessageContainer>
        <ErrorMessage>존재하지 않는 페이지입니다</ErrorMessage>
        <ErrorMessage>
          올바른 주소가 맞는지 다시 한번 확인해 주세요
        </ErrorMessage>
      </MessageContainer>
      <ErrorButton onClick={handleHomePage}>홈으로 가기</ErrorButton>
    </Container>
  );
}

export default NotFoundPage;
