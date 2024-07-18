import styled from 'styled-components';
import Section from '../common/Section';

const LandingSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1248px) {
    padding: 0 24px;
  }

  @media (max-width: 360px) {
    padding: 0 20px;
  }
`;

export default LandingSection;
