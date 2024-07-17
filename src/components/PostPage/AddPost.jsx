import React, { useState } from 'react';
import TextInput from './TextInput';
import BgSelector from './BgSelector';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';

const PageWrap = styled.div`
  padding-top: 60px;
  max-width: 720px;
  margin: 0 auto;
`;

const PostEditPage = () => {
  const [valueName, setValueName] = useState('');

  const handleSubmit = () => {
    console.log('생성');
  };

  return (
    <PageWrap>
      <TextInput
        label='To.'
        placeholder='받는 사람 이름을 입력해 주세요'
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
      />
      <BgSelector />
      <SubmitButton onClick={handleSubmit} />
    </PageWrap>
  );
};

export default PostEditPage;
