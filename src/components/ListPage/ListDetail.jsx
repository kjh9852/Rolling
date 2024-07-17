import styled from 'styled-components';
import Section from '../common/Section';

const ListSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
`;
const Container = styled.div`
  width: 100%;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 50px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  font-weight: 700;
  color: var(--black);
`;

const CardList = styled.div`
  width: 1160px;
  height: 260px;
  background-color: gray;
`;

const GoToMakeButton = styled.button`
  padding: 14px 60px;
  margin-bottom: 218px;
  width: 280px;
  height: 56px;
  background-color: var(--purple600);
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: var(--white);
  border-radius: 12px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--purple700);
  }
  &:active {
    background-color: var(--purple800);
  }
  &:focus {
    background-color: var(--purple800);
  }
`;

export default function ListDetail() {
  return (
    <ListSection>
      <Container>
        <Title>인기 롤링 페이퍼 🔥</Title>
        <CardList></CardList>
        <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
        <CardList></CardList>
      </Container>
      <GoToMakeButton>나도 만들어보기</GoToMakeButton>
    </ListSection>
  );
}
