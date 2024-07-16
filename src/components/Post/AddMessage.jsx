import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from '../Select/Select';
import Section from '../common/Section';
import NameInput from '../Input/NameInput';
import ContentArea from '../TextArea/ContentArea';
import ProfileImageList from '../ProfileImageList/ProfileImageList';
import { getProfileImage } from '../../util/api';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 112px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 720px;
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

const SubmitButton = styled.button`
  width: 720px;
  height: 56px;
  background-color: var(--purple600);
  border-radius: 12px;
  font-size: 18px;
  color: var(--white);
`;

function AddMessage() {
  const relationShipOptions = ['지인', '친구', '동료', '가족'];
  const fontOptions = ['Noto Sans', '폰트2'];

  const [profileItem, setProfileItem] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png'
  );
  const [relationShip, setRelationShip] = useState(relationShipOptions[0]);
  const [font, setFont] = useState(fontOptions[0]);
  const [content, setContent] = useState('');

  const handleLoad = async () => {
    const { imageUrls } = await getProfileImage();
    setProfileItem(imageUrls);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    console.log(
      'name :',
      name,
      'content :',
      content,
      'image :',
      image,
      'relationShip :',
      relationShip,
      'font :',
      font
    );
  }, [name, content, image, relationShip, font]); // 삭제 예정 데이터확인 NameInput

  return (
    <Section>
      <Container>
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
        <SubmitButton type='submit'>생성하기</SubmitButton>
      </Container>
    </Section>
  );
}

export default AddMessage;
