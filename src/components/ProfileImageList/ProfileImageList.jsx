import styled from 'styled-components';
import { useEffect, useState } from 'react';
import profileImages from '../../util/profileImages';

const InputImageContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-around;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SelectedImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`;

const ImageLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray500);
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @media (max-width: 575px) {
    gap: 4px 2px;
  }
`;

const ImageChoose = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 575px) {
    width: 40px;
    height: 40px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

function ProfileImageList({ items, onImageSelect }) {
  const [selectedSrc, setSelectedSrc] = useState(
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png'
  );

  const handleImageSelect = (src) => {
    setSelectedSrc(src);
    onImageSelect(src);
  };

  useEffect(() => {
    if (items.length > 0) {
      setSelectedSrc((prev) => prev);
    }
  }, [items]);

  return (
    <InputImageContainer>
      <SelectedImage src={selectedSrc} alt='프로필 이미지' />
      <ImageContainer>
        <ImageLabel>프로필 이미지를 선택해주세요!</ImageLabel>
        <Images>
          {profileImages.map((profile, index) => (
            <ImageChoose
              key={index}
              src={profile}
              alt={`프로필 이미지 ${index + 1}`}
              onClick={() => handleImageSelect(profile)}
            />
          ))}
        </Images>
      </ImageContainer>
    </InputImageContainer>
  );
}

export default ProfileImageList;
