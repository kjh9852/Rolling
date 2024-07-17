import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--purple600);
  width: 100%;
  color: var(--white);
  padding: 15px 30px;
  height: 56px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 70px;
  &:hover {
    background-color: var(--purple800);
  }
`;

const SubmitButton = ({ onClick }) => {
  return <Button onClick={onClick}>생성하기</Button>;
};

export default SubmitButton;
