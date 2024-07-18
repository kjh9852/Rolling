import LandingSection from './LandingSection';
import styled from 'styled-components';
import { Card1, Card2, CardImg } from './Card';
import IntroSection from './IntroSection';
import PointBox from './PointBox';
import cardImg1 from '../../assets/image/cardImg1.png';
import cardImg2 from '../../assets/image/cardImg2.png';
import PrimaryButton from '../common/PrimaryButton';

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
  margin-bottom: 174px;
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
        <CardImg style={{ backgroundImage: `url(${cardImg1})` }} />
      </Card1>
      <Card2>
        <CardImg style={{ backgroundImage: `url(${cardImg2})` }} />
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
