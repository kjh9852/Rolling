import styled from 'styled-components';

const Arrow = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: #101010;
  stroke-width: 1.5;
`;

const NavigationButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  ${({ $isNext }) => ($isNext ? 'right: -20px;' : 'left: -20px;')}

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.35);
  }

  &:active {
    background-color: #e0e0e0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    display: none;
  }
`;

const NavigationButtonComponent = ({ isNext, ...props }) => (
  <NavigationButton $isNext={isNext} {...props}>
    <Arrow viewBox='0 0 24 24'>
      {isNext ? <path d='M8 4l8 8-8 8' /> : <path d='M16 4l-8 8 8 8' />}
    </Arrow>
  </NavigationButton>
);

export {
  NavigationButtonComponent as PrevButton,
  NavigationButtonComponent as NextButton,
};
