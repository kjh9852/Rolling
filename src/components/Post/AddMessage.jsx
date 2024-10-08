import { useState } from 'react';
import styled from 'styled-components';
import Select from './Select/Select';
import NameInput from '../Input/NameInput';
import ContentArea from './TextArea/ContentArea';
import ProfileImageList from './ProfileImageList/ProfileImageList';
import PrimaryButton from '../common/PrimaryButton';
import { postRecipientMessage } from '../../util/api';
import { useNavigate, useParams } from 'react-router-dom';
import profileImages from '../../util/profileImages';
import { RELATIONSHIP, FONT } from '../../util/selectOptions';

const defaultImage =
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png';
const RELATIONSHIP_OPTIONS = RELATIONSHIP.map((list) => list.type);
const FONT_OPTIONS = FONT;

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
  const [profileItem] = useState([profileImages]);
  const [postData, setPostData] = useState({
    sender: '',
    profileImageURL: defaultImage,
    relationship: RELATIONSHIP_OPTIONS[0],
    content: '',
    font: FONT_OPTIONS[0],
  });

  const handleChange = (field, value) => {
    setPostData((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postRecipientMessage(postId, postData);
      navigate(`/post/${postId}`);
    } catch (error) {
      console.error('메시지 전송 실패:', error);
      alert('메시지 전송에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const active =
    postData.sender && postData.content && postData.content !== '<p><br></p>';

  return (
    <Container onSubmit={handleSubmit}>
      <ButtonContainer>
        <BackButton isSvg={true} type='button' onClick={handleGoBack} />
      </ButtonContainer>
      <InputContainer>
        <Title>From.</Title>
        <NameInput
          placeholder='이름을 입력해주세요.'
          onChange={(e) => handleChange('sender', e.target.value)}
          value={postData.sender}
        />
      </InputContainer>
      <InputContainer>
        <Title>프로필 이미지</Title>
        <InputImageContainer>
          <ProfileImageList
            items={profileItem}
            onImageSelect={(selectedImage) =>
              handleChange('profileImageURL', selectedImage)
            }
          />
        </InputImageContainer>
      </InputContainer>
      <InputContainer>
        <Title>상대와의 관계</Title>
        <Select
          options={RELATIONSHIP_OPTIONS}
          type='relationship'
          onRelationShipSelect={(selectedRelation) => (
            'relationship', selectedRelation
          )}
        />
      </InputContainer>
      <InputContainer>
        <Title>내용을 입력해 주세요</Title>
        <ContentArea
          onChange={(content) => handleChange('content', content)}
          value={postData.content}
        />
      </InputContainer>
      <InputContainer>
        <Title>폰트 선택</Title>
        <Select
          options={FONT_OPTIONS}
          type='font'
          onFontSelect={(selectdFont) => handleChange('font', selectdFont)}
        />
      </InputContainer>
      <SubmitButton
        className={'AddMessageCommit'}
        type='submit'
        disabled={!active}
      >
        생성하기
      </SubmitButton>
    </Container>
  );
}

export default AddMessage;
