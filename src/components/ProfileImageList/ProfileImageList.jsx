import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  gap: 5px;
`;

const ImageChoose = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
`;

function ProfileImageList({ items, onImageSelect }) {
  const [selectedSrc, setSelectedSrc] = useState(items[0]);

  const handleImageSelect = (src) => {
    setSelectedSrc(src);
    onImageSelect(src);
  };

  useEffect(() => {
    if (items.length > 0) {
      setSelectedSrc(items[0]);
    }
  }, [items]);

  return (
    <InputImageContainer>
      <SelectedImage src={selectedSrc} alt='프로필 이미지' />
      <ImageContainer>
        <ImageLabel>프로필 이미지를 선택해주세요!</ImageLabel>
        <Images>
          {items.map((profile, index) => (
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
