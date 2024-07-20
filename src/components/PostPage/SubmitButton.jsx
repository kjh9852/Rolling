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
`;

const SubmitButton = ({ children, disabled, ...props }) => {
  return (
    <AddPostCommit type='submit' disabled={disabled} {...props}>
      {children}
    </AddPostCommit>
  );
};

export default SubmitButton;
