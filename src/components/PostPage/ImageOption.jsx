import React from 'react';
import styled from 'styled-components';

const ImageWrap = styled.div`
  display: contents;

  @media (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
  }
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 769px) {
    width: calc(25% - 7.5px);
    max-width: 168px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ selected }) => (selected ? 0.5 : 1)};
  }
`;

const CheckingMark = styled.div`
  display: ${(props) => (props.selected ? 'flex' : 'none')};
  width: 44px;
  height: 44px;
  background-color: var(--gray500);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;

  &:after {
    content: '✓';
    color: #fff;
    font-size: 28px;
    font-weight: 600;
  }
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageOption = ({ images, selectedImage, onSelect, isLoading }) => {
  if (isLoading) {
    return <LoadingPlaceholder>Loading...</LoadingPlaceholder>; // 새로 추가: 로딩 중 표시
  }

  return (
    <ImageWrap>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          selected={selectedImage === image.original}
          onClick={() => onSelect(image)}
        >
          <img src={image.thumbnail} alt={'Background'} />
          <CheckingMark
            selected={selectedImage === image.original}
          ></CheckingMark>
        </ImageCard>
      ))}
    </ImageWrap>
  );
};

export default ImageOption;
