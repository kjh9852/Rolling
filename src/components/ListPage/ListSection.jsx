import styled from 'styled-components';
import Section from '../common/Section';

const ListSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  @media (min-width: 769px) and (max-width: 1023px) {
    overflow-x: hidden;
    height: 100vh;
  }
  @media (max-width: 768px) {
    overflow-x: hidden;
    height: 100vh;
  }
`;

export default ListSection;
