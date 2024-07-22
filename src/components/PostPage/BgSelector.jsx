import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorOption from './ColorOption';
import ImageOption from './ImageOption';
import { fetchBackgroundImages } from '../../util/api';

const BgWrap = styled.div`
  width: 100%;
`;

const TabWrap = styled.div`
  margin-bottom: 45px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 700;
  margin-top: 50px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: 400;
`;

const TabButton = styled.button`
  background: ${({ active }) =>
    active === 'true' ? 'var(--white)' : 'var(--gray100)'};
  border: 2px solid
    ${({ active }) =>
      active === 'true' ? 'var(--purple700)' : 'var(--gray100)'};
  color: ${({ active }) =>
    active === 'true' ? 'var(--purple700)' : 'var(--gray900)'};
  font-weight: ${({ active }) => (active === 'true' ? '700' : '400')};
  width: 120px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const OptionsWrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  @media (min-width: 769px) {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
  }
`;

const BgSelector = ({
  selectedColor,
  setSelectedColor,
  selectedImage,
  setSelectedImage,
  checkedTab,
  setCheckedTab,
}) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩상태
  const colors = ['beige', 'purple', 'blue', 'green'];

  //프리로딩 함수
  const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  useEffect(() => {
    const loadBackgroundImages = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        const { thumbnailUrls, originalUrls } = await fetchBackgroundImages(
          168
        );
        const imageData = thumbnailUrls.map((thumb, index) => ({
          thumbnail: thumb,
          original: originalUrls[index],
        }));
        setImages(imageData);

        if (originalUrls.length > 0 && !selectedImage) {
          setSelectedImage(originalUrls[0]);
        }

        // 새로 추가: 썸네일 이미지 프리로딩
        await Promise.all(thumbnailUrls.map(preloadImage));
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false); // 로딩 완료
      }
    };

    loadBackgroundImages();
  }, []);

  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setCheckedTab(tab);
  };

  return (
    <BgWrap>
      <Title>배경화면을 선택해 주세요.</Title>
      <Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Description>
      <TabWrap>
        <TabButton
          active={(checkedTab === 'color').toString()}
          onClick={(e) => handleTabClick('color', e)}
        >
          컬러
        </TabButton>
        <TabButton
          active={(checkedTab === 'image').toString()}
          onClick={(e) => handleTabClick('image', e)}
        >
          이미지
        </TabButton>
      </TabWrap>
      <OptionsWrapper>
        {checkedTab === 'color' &&
          colors.map((color, index) => (
            <ColorOption
              key={index}
              color={`var(--${color}200)`}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        {checkedTab === 'image' && (
          <ImageOption
            images={images}
            selectedImage={selectedImage}
            onSelect={(image) => setSelectedImage(image.original)}
            isLoading={isLoading}
          />
        )}
      </OptionsWrapper>
    </BgWrap>
  );
};

export default BgSelector;
