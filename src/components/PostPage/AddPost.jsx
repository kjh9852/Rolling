import React, { useState } from 'react';
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
  const [form, setForm] = useState({
    name: '',
    selectedColor: 'beige',
    selectedImage: null,
    checkedTab: 'color',
  });

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      name: form.name,
      backgroundColor: form.selectedColor,
      backgroundImageURL:
        form.checkedTab === 'image' ? form.selectedImage : null,
    };

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
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <BgSelector
          selectedColor={form.selectedColor}
          setSelectedColor={(color) => handleChange('selectedColor', color)}
          selectedImage={form.selectedImage}
          setSelectedImage={(image) => handleChange('selectedImage', image)}
          checkedTab={form.checkedTab}
          setCheckedTab={(tab) => handleChange('checkedTab', tab)}
        />
        <SubmitButton disabled={form.name.trim() === ''}>생성하기</SubmitButton>
      </form>
    </PageWrap>
  );
};

export default AddPost;
