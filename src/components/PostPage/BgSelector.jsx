import React, { useState } from 'react';
import styled from 'styled-components';
import ColorOption from './ColorOption';
import ImageOption from './ImageOption';

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
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: 400;
`;

const TabButton = styled.button`
  background: ${({ active }) => (active ? 'var(--white)' : 'var(--gray100)')};
  border: 2px solid
    ${({ active }) => (active ? 'var(--purple700)' : 'var(--gray100)')};
  color: ${({ active }) => (active ? 'var(--purple700)' : 'var(--gray900)')};
  font-weight: ${({ active }) => (active ? '700' : '400')};
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
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const BgSelector = () => {
  const [checkedTab, setCheckedTab] = useState('color');
  const [selectedColor, setSelectedColor] = useState('var(--beige200)');
  const [selectedImage, setSelectedImage] = useState(null);

  const colors = [
    'var(--beige200)',
    'var(--purple200)',
    'var(--blue200)',
    'var(--green200)',
  ];

  const handleTabClick = (tab) => {
    setCheckedTab(tab);
  };

  return (
    <BgWrap>
      <Title>배경화면을 선택해 주세요.</Title>
      <Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Description>
      <TabWrap>
        <TabButton
          active={checkedTab === 'color'}
          onClick={() => handleTabClick('color')}
        >
          컬러
        </TabButton>
        <TabButton
          active={checkedTab === 'image'}
          onClick={() => handleTabClick('image')}
        >
          이미지
        </TabButton>
      </TabWrap>
      <OptionsWrapper>
        {checkedTab === 'color' &&
          colors.map((color, index) => (
            <ColorOption
              key={index}
              color={color}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        {checkedTab === 'image' && (
          <ImageOption
            selectedImage={selectedImage}
            onSelect={setSelectedImage}
          />
        )}
      </OptionsWrapper>
    </BgWrap>
  );
};

export default BgSelector;
