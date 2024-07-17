import styled from 'styled-components';
import Section from '../common/Section';
import PrimaryButton from '../common/PrimaryButton';

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

const GoToMakeButton = styled(PrimaryButton)`
  padding: 14px 60px;
  margin-bottom: 218px;
  line-height: 2.8rem;
  font-size: 1.8rem;
  transition: all.3s ease;
  span {
    display: flex;
    justify-content: center;
    width: 160px;
  }
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
      <GoToMakeButton to='/post'>나도 만들어보기</GoToMakeButton>
    </ListSection>
  );
}
