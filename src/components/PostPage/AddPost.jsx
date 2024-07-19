import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NameInput from './NameInput';
import BgSelector from './BgSelector';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';

const PageWrap = styled.div`
  padding-top: 60px;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 60px;
`;

const To = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const AddPost = () => {
  const [valueName, setValueName] = useState('');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSelectedImage] = useState(null);
  const [checkedTab, setCheckedTab] = useState('color');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSubmitDisabled(valueName.trim() === '');
  }, [valueName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <PageWrap>
      <form onSubmit={handleSubmit}>
        <To>To.</To>
        <NameInput
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
        <SubmitButton disabled={isSubmitDisabled} />
      </form>
    </PageWrap>
  );
};

export default AddPost;
