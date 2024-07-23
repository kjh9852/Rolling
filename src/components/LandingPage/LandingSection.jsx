import styled from 'styled-components';
import Section from '../common/Section';

const LandingSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 124px;

  @media (max-width: 1248px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 106px;
    min-height: calc(100lvh + 65px);
  }
`;

export default LandingSection;
