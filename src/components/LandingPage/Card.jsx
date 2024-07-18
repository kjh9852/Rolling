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
    flex-direction: column;
  }
  @media (max-width: 768px) {
    height: 362px;
  }
`;

const Card1 = styled(CardBase)`
  justify-content: space-between;
  margin-top: 125px;
  margin-bottom: 30px;
  padding: 60px 40px 60px 60px;
`;

const Card2 = styled(CardBase)`
  justify-content: flex-start;
  padding: 60px 60px 60px 0px;
  margin-bottom: 48px;
`;

const CardImg = styled.div`
  background-size: cover;
  background-position: center;
  width: 640px;
  height: 162px;
`;

export { Card1, Card2, CardImg };
