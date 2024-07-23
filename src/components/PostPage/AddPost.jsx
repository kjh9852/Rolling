import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton';
import NameInput from '../Input/NameInput';
import BgSelector from './BgSelector';
import SubmitButton from './SubmitButton';
import styled from 'styled-components';
import { recipientMessageForm } from '../../util/api';

const PageWrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
  margin-top: 95px;
  box-sizing: border-box;

  @media (max-width: 769px) {
    margin-top: 60px;
    padding: 24px 20px;
  }
`;

const ButtonContainer = styled.div`
  display: none;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 68px;
  top: 0px;
  left: 0px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #ededed;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const BackButton = styled(PrimaryButton)`
  display: none;
  align-items: center;
  padding: 5px 14px;
  border-radius: 6px;
  svg {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: flex;
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

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

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
      const response = await recipientMessageForm(postData);
      console.log('생성 완료:', response);
      navigate(`/post/${response.id}`);
    } catch (error) {
      console.error('데이터를 보내는 중 오류가 발생했습니다.', error);
      alert('데이터를 보내는 중 오류가 발생했습니다.');
    }
  };

  return (
    <PageWrap>
      <ButtonContainer>
        <BackButton isSvg={true} onClick={handleGoBack} />
      </ButtonContainer>
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
