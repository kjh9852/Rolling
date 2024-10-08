import styled from 'styled-components';

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;
  color: var(--gray500);

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

export default SubTitle;
