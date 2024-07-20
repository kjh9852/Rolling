import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 50px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  font-weight: 700;
  color: var(--black);
  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: 50px;
    margin-left: 24px;
    margin-bottom: 16px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    margin-top: 40px;
    margin-left: 20px;
    margin-bottom: 12px;
    letter-spacing: normal;
  }
`;
export default Title;
