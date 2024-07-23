import React from 'react';
import { Card1, Card2, CardImg1, CardImg2 } from './Cards';
import IntroSection from './IntroSection';
import PointBox from './PointBox';
import Title from './Title';
import SubTitle from './SubTitle';
import StartButton from './StartButton';
import mobileCardImg1 from '../../assets/image/mobile_card_img.png';
import mobileCardImg2 from '../../assets/image/mobileCardImg2.png';
import LandingSection from './LandingSection';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 360px;
`;

export default function MobileLandingDetail() {
  return (
    <LandingSection>
      <Card1>
        <Container>
          <IntroSection>
            <PointBox>Point. 01</PointBox>
            <Title>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</Title>
            <SubTitle>로그인 없이 자유롭게 만들어요.</SubTitle>
          </IntroSection>
        </Container>
        <CardImg2>
          <img
            src={mobileCardImg1}
            style={{ minWidth: '320px' }}
            alt='point1'
          />
        </CardImg2>
      </Card1>
      <Card2>
        <Container>
          <IntroSection>
            <PointBox>Point. 02</PointBox>
            <Title>서로에게 이모지로 감정을 표현해보세요</Title>
            <SubTitle>롤링 페이퍼에 이모지를 추가할 수 있어요.</SubTitle>
          </IntroSection>
        </Container>
        <CardImg2>
          <img
            src={mobileCardImg2}
            style={{ minWidth: '320px' }}
            alt='point2'
          />
        </CardImg2>
      </Card2>
      <StartButton to='/list'>구경해보기</StartButton>
    </LandingSection>
  );
}
