import PrimaryButton from '../common/PrimaryButton';
import styled from 'styled-components';

const GoToMakeButton = styled(PrimaryButton)`
  padding: 14px 60px;
  margin-bottom: 218px;
  line-height: 2.8rem;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  span {
    display: flex;
    justify-content: center;
    width: 160px;
  }
  &:hover {
    background-color: var(--purple700);
  }
  &:active {
    background-color: var(--purple800);
  }
  &:focus {
    background-color: var(--purple800);
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 132px 0 24px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 32px 0px 24px;
  }
`;

export default GoToMakeButton;
