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
`;

export default GoToMakeButton;
