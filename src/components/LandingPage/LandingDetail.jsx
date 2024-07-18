import LandingSection from './LandingSection';
import { Card1, Card2, CardImg } from './Card';
import IntroSection from './IntroSection';
import PointBox from './PointBox';
import Title from './Title';
import SubTitle from './SubTitle';
import StartButton from './StartButton';
import cardImg1 from '../../assets/image/cardImg1.png';
import cardImg2 from '../../assets/image/cardImg2.png';

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
