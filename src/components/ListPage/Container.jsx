import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 100vw;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 100vw;
    margin-bottom: 0;
  }
`;

export default Container;
