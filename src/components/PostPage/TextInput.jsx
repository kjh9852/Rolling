import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: 700;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--gray300);
  border-radius: 5px;
  height: 50px;
`;

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <Wrap>
      <Label>{label}</Label>
      <Input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrap>
  );
};

export default TextInput;
