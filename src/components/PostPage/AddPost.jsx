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
`;

const AddPost = () => {
  const [valueName, setValueName] = useState('');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSelectedImage] = useState(null);
  const [checkedTab, setCheckedTab] = useState('color');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let postData = {
      name: valueName,
    };

    if (checkedTab === 'color' && selectedColor) {
      postData.backgroundColor = selectedColor;
    } else if (checkedTab === 'image' && selectedImage) {
      postData.backgroundImage = selectedImage;
    }

    console.log('생성', postData);
    const newId = Date.now(); // 임시
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
          checkedTab={checkedTab}
          setCheckedTab={setCheckedTab}
        />
        <SubmitButton />
      </form>
    </PageWrap>
  );
};

export default AddPost;
