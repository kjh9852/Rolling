import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from '../Select/Select';
import NameInput from '../Input/NameInput';
import ContentArea from '../TextArea/ContentArea';
import ProfileImageList from '../ProfileImageList/ProfileImageList';
import PrimaryButton from '../common/PrimaryButton';
import { PostRecipientMessage } from '../../util/api';
import { useNavigate, useParams } from 'react-router-dom';
import profileImages from '../../util/profileImages';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  max-width: 720px;
  margin: 112px auto;
  @media (max-width: 1248px) {
    padding: 0 24px;
    max-width: 768px;
  }

  @media (max-width: 769px) {
    margin-top: 84px;
  }

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;

const InputImageContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const Title = styled.label`
  font-size: 24px;
  font-weight: 700;
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  font-size: 18px;
  &:disabled {
    background: var(--gray300);
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

function AddMessage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const relationShipOptions = ['지인', '친구', '동료', '가족'];
  const fontOptions = [
    'Noto Sans',
    'Pretendard',
    '나눔명조',
    '나눔손글씨 손편지체',
  ];

  const [profileItem] = useState([profileImages]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png'
  );
  const [relationShip, setRelationShip] = useState(relationShipOptions[0]);
  const [font, setFont] = useState(fontOptions[0]);
  const [content, setContent] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostRecipientMessage({
      postId,
      name,
      image,
      relationShip,
      content,
      font,
    });
    navigate(`/post/${postId}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <ButtonContainer>
        <BackButton isSvg={true} type='button' onClick={handleGoBack} />
      </ButtonContainer>
      <InputContainer>
        <Title>From.</Title>
        <NameInput
          placeholder='이름을 입력해주세요.'
          onChange={handleNameChange}
          value={name}
        />
      </InputContainer>
      <InputContainer>
        <Title>프로필 이미지</Title>
        <InputImageContainer>
          <ProfileImageList
            items={profileItem}
            onImageSelect={setImage}
          ></ProfileImageList>
        </InputImageContainer>
      </InputContainer>
      <InputContainer>
        <Title>상대와의 관계</Title>
        <Select
          options={relationShipOptions}
          type='relationship'
          onRelationShipSelect={setRelationShip}
          onFontSelect={() => {}}
        />
      </InputContainer>
      <InputContainer>
        <Title>내용을 입력해 주세요</Title>
        <ContentArea onChange={setContent} value={content} />
      </InputContainer>
      <InputContainer>
        <Title>폰트 선택</Title>
        <Select
          options={fontOptions}
          type='font'
          onRelationShipSelect={() => {}}
          onFontSelect={setFont}
        />
      </InputContainer>
      <SubmitButton
        className={'AddMessageCommit'}
        type='submit'
        disabled={name && content && content !== '<p><br></p>' ? false : true}
      >
        생성하기
      </SubmitButton>
    </Container>
  );
}

export default AddMessage;
