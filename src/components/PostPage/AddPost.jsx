import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NameInput from './NameInput';
import BgSelector from './BgSelector';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';
import { RecipientMessageForm } from '../../util/api';

const PageWrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
  margin-top: 95px;
  box-sizing: border-box;

  @media (max-width: 769px) {
    margin-top: 26px;
    padding: 24px 20px;
  }
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

    let postData = {
      name: valueName,
      backgroundColor: selectedColor, // 항상 기본값 설정
      backgroundImageURL: null,
    };

    if (checkedTab === 'image' && selectedImage) {
      postData.backgroundImageURL = selectedImage;
      // 이미지를 선택했을 때도 backgroundColor를 null로 설정하지 않음
    }

    try {
      const response = await RecipientMessageForm(postData);
      console.log('생성 완료:', response);
      navigate(`/post/${response.id}`);
    } catch (error) {
      console.error('데이터를 보내는 중 오류가 발생했습니다.', error);
      alert('데이터를 보내는 중 오류가 발생했습니다.');
    }
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
        <SubmitButton disabled={isSubmitDisabled}>생성하기</SubmitButton>
      </form>
    </PageWrap>
  );
};

export default AddPost;
