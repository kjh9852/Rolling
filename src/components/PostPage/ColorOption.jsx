import React from 'react';
import styled from 'styled-components';

const OptionWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    width: 168px;
    height: 168px;
  }
`;

const CheckingMark = styled.div`
  display: ${(props) => (props.selected ? 'flex' : 'none')};
  width: 44px;
  height: 44px;
  background-color: var(--gray500);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
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

const ColorOption = ({ color, selected, onClick }) => {
  return (
    <OptionWrap color={color} onClick={onClick}>
      <CheckingMark selected={selected} />
    </OptionWrap>
  );
};

export default ColorOption;
