import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import BgSelector from './BgSelector';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';

const PageWrap = styled.div`
  padding-top: 60px;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 60px;
`;

const AddPost = () => {
  const [valueName, setValueName] = useState('');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now(); //임시
    console.log('생성', { valueName, selectedColor, selectedImage });
    navigate(`/post/${newId}`);
  };

  return (
    <PageWrap>
      <form onSubmit={handleSubmit}>
        <TextInput
          label='To.'
          placeholder='받는 사람 이름을 입력해 주세요'
          value={valueName}
          onChange={(e) => setValueName(e.target.value)}
        />
        <BgSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <SubmitButton />
      </form>
    </PageWrap>
  );
};

export default AddPost;
