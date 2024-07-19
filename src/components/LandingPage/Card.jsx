import styled from 'styled-components';

const CardBase = styled.div`
  width: 100%;
  height: 324px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--surface);
`;

const Card1 = styled(CardBase)`
  align-items: flex-start;
  margin-top: 125px;
  margin-bottom: 30px;
  padding: 60px 0px 60px 60px;
`;

const Card2 = styled(CardBase)`
  align-items: center;
  padding: 60px 192px 60px 0px;
  margin-bottom: 48px;
`;

const CardImg = styled.div`
  background-size: cover;
  background-position: center;
  width: 720px;
  height: 204px;
`;

export { Card1, Card2, CardImg };
