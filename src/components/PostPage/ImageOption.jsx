import React from 'react';
import styled from 'styled-components';

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ImageCard = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ selected }) => (selected ? 0.5 : 1)};
  }
`;

const CheckingMark = styled.div`
  display: ${(props) => (props.selected ? 'block' : 'none')};
  width: 44px;
  height: 44px;
  background-color: var(--gray500);
  border-radius: 50%;
  position: absolute;
  top: 62px;
  left: 62px;
  &:after {
    content: '✓';
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageOption = ({ images, selectedImage, onSelect }) => {
  return (
    <ImageWrap>
      {images.map((image, index) => (
        <ImageCard
          key={index}
          selected={selectedImage === image}
          onClick={() => onSelect(image)}
        >
          <img src={image} alt={'Background'} />
          <CheckingMark selected={selectedImage === image}></CheckingMark>
        </ImageCard>
      ))}
    </ImageWrap>
  );
};

export default ImageOption;
