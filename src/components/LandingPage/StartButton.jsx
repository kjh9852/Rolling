import styled from 'styled-components';
import PrimaryButton from '../common/PrimaryButton';

const StartButton = styled(PrimaryButton)`
  padding: 14px 60px;
  margin-bottom: 174px;
  line-height: 2.8rem;
  font-size: 1.8rem;
  transition: all.3s ease;
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
    margin-top: 72px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 14px 80px;
    margin: 24px 0px;
  }
`;

export default StartButton;
