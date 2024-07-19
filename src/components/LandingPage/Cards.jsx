import styled from 'styled-components';

const CardBase = styled.div`
  width: 100%;
  height: 324px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--surface);

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 440px;
    justify-content: center;
  }
  @media (max-width: 768px) {
    height: 362px;
  }
`;

const Card1 = styled(CardBase)`
  justify-content: space-between;
  margin-top: 124px;
  margin-bottom: 30px;
  padding: 60px 40px 60px 60px;

  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: 113px;
    height: 440px;
    padding: 88px 40px 61px 40px;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 352px;
    padding: 68px 24px 24px 24px;
    margin-bottom: 24px;
    overflow: hidden;
  }
`;

const Card2 = styled(CardBase)`
  justify-content: flex-start;
  padding: 60px 60px 60px 0px;
  margin-bottom: 48px;
  @media (min-width: 769px) and (max-width: 1023px) {
    padding: 88px 40px 40px 40px;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 362px;
    margin-bottom: 37px;
    padding: 68px 24px 24px 24px;
    overflow: hidden;
  }
`;

const CardImg1 = styled.div`
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  width: 664px;
  height: 186px;
  margin: -12px;
  @media (max-width: 768px) {
    width: 369px;
    height: 104px;
    margin: -7.14px -7.245px;
  }
`;

const CardImg2 = styled(CardImg1)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 720px;
  height: 220px;
  margin: 0px -40px -16px -40px;
  @media (max-width: 768px) {
    width: 320px;
    height: 124px;
    margin-top: -2px;
    margin: -2px 17.255px -11px 17.255px;
    margin-bottom: -11px;
  }
`;

export { Card1, Card2, CardImg1, CardImg2 };
