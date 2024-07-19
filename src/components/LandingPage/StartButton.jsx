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
`;

export default StartButton;
