import React from "react";
import styled from "styled-components";

const OptionWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  position: relative;
`;

const CheckingMark = styled.div`
  display: ${(props) => (props.selected ? "block" : "none")};
  width: 44px;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 62px;
  left: 62px;
  &:after {
    content: "✓";
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
