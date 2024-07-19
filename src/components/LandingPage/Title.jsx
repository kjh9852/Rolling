import styled from 'styled-components';

const Title = styled.h2`
  padding: 0px;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: var(--gray900);
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export default Title;
