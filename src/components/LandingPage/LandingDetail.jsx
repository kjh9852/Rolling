import styled from 'styled-components';
import Section from '../common/Section';
import cardImg1 from '../../assets/image/cardImg1.png';
import cardImg2 from '../../assets/image/cardImg2.png';
import PrimaryButton from '../common/PrimaryButton';

const LandingSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card1 = styled.div`
  width: 100%;
  height: 324px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 125px;
  margin-bottom: 30px;
  padding: 60px 0px 60px 60px;
  background-color: var(--surface);
`;

const Card2 = styled.div`
  width: 100%;
  height: 324px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 192px 60px 0px;
  background-color: var(--surface);
  margin-bottom: 48px;
`;

const CardImg1 = styled.div`
  background-image: url(${cardImg1});
  background-size: cover;
  background-position: center;
  width: 720px;
  height: 204px;
`;

const CardImg2 = styled.div`
  background-image: url(${cardImg2});
  background-size: cover;
  background-position: center;
  width: 720px;
  height: 204px;
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const PointBox = styled.div`
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--purple600);
  width: 82px;
  height: 32px;
  border-radius: 50px;
  font-size: 14px;
  color: var(--white);
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 20px;
`;

const Title = styled.h2`
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: var(--gray900);
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: var(--gray500);
`;

const StartButton = styled(PrimaryButton)`
  padding: 14px 60px;
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

export default function LandingDetail() {
  return (
    <LandingSection>
      <Card1>
        <IntroSection>
          <PointBox>Point. 01</PointBox>
          <Title>
            누구나 손쉽게, 온라인
            <br />
            롤링 페이퍼를 만들 수 있어요
          </Title>
          <SubTitle>로그인 없이 자유롭게 만들어요.</SubTitle>
        </IntroSection>
        <CardImg1 />
      </Card1>
      <Card2>
        <CardImg2 />
        <IntroSection>
          <PointBox>Point. 02</PointBox>
          <Title>
            서로에게 이모지로 감정을
            <br />
            표현해보세요
          </Title>
          <SubTitle>롤링 페이퍼에 이모지를 추가할 수 있어요.</SubTitle>
        </IntroSection>
      </Card2>
      <StartButton to='/list'>구경해보기</StartButton>
    </LandingSection>
  );
}
