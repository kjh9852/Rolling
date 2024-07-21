import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../common/PrimaryButton';

const AddPostCommit = styled(PrimaryButton)`
  width: 100%;
  height: 56px;
  font-size: 18px;
  margin-top: 70px;

  &:disabled {
    background-color: var(--gray300);
    cursor: not-allowed;
  }

  @media (max-width: 1248px) {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 48px); // 좌우 여백 24px씩
    max-width: 720px;
  }
`;

const SubmitButton = ({ children, disabled, ...props }) => {
  return (
    <AddPostCommit type='submit' disabled={disabled} {...props}>
      {children}
    </AddPostCommit>
  );
};

export default SubmitButton;
