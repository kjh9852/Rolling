import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? 'var(--gray500)' : 'var(--purple600)'};
  width: 100%;
  color: var(--white);
  padding: 15px 30px;
  height: 56px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 70px;
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? 'var(--gray500)' : 'var(--purple800)'};
  }
`;

const SubmitButton = ({ disabled }) => {
  return (
    <Button type='submit' disabled={disabled}>
      생성하기
    </Button>
  );
};

export default SubmitButton;
