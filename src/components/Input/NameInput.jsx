import styled from 'styled-components';
import { useState } from 'react';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: var(--error);
  font-size: 12px;
  margin-top: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${({ isError }) => (isError ? 'var(--error)' : 'var(--gray300)')};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

function NameInput({ placeholder, onChange, value }) {
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.trim() !== '') {
      setIsError(false);
    }
    onChange(e); // 부모 컴포넌트로부터 전달된 onChange 핸들러 호출
  };

  const handleBlur = () => {
    if (value.trim() === '') {
      setIsError(true);
    }
  };

  return (
    <InputContainer>
      <Input
        id='name'
        name='name'
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        isError={isError}
      />

      {isError && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
    </InputContainer>
  );
}

export default NameInput;
