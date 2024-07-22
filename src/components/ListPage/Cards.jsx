import styled, { css } from 'styled-components';
import Overlay from './Overlay';

const getCSSVariable = (colorName) => {
  const colorMap = {
    purple: '--purple200',
    beige: '--beige200',
    blue: '--blue200',
    green: '--green200',
    gray: '--gray200',
  };
  return colorMap[colorName] || colorName;
};

const specialShapeStyles = css`
  ${({ $backgroundColor, $backgroundImageURL }) =>
    !$backgroundImageURL &&
    $backgroundColor === 'purple' &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 336px;
        height: 169px;
        left: 133px;
        right: -194px;
        top: 124px;
        background: rgba(220, 185, 255, 0.4);
        border-radius: 90.5px;
        @media (max-width: 768px) {
          left: 100.6px;
        }
      }
    `}
  ${({ $backgroundColor, $backgroundImageURL }) =>
    !$backgroundImageURL &&
    $backgroundColor === 'beige' &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 332px;
        height: 318px;
        left: 154px;
        right: -211px;
        top: 124px;
        background: rgba(255, 211, 130, 0.7);
        border-radius: 51px;
        @media (max-width: 768px) {
          left: 100.6px;
        }
      }
    `}
  ${({ $backgroundColor, $backgroundImageURL }) =>
    !$backgroundImageURL &&
    $backgroundColor === 'blue' &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 142px;
        height: 142px;
        left: 133px;
        top: 118px;
        background: rgba(157, 221, 255, 0.7);
        clip-path: path(
          'M74.4299 16.6978C88.1712 -5.00283 119.829 -5.00284 133.57 16.6978L202.482 125.526C217.239 148.829 200.495 179.25 172.912 179.25H35.0878C7.5049 179.25 -9.23877 148.829 5.51768 125.526L74.4299 16.6978Z'
        );
        @media (max-width: 768px) {
          width: 107.4px;
          height: 142px;
          left: 100.6px;
        }
      }
    `}
  ${({ $backgroundColor, $backgroundImageURL }) =>
    !$backgroundImageURL &&
    $backgroundColor === 'green' &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 336px;
        height: 169px;
        left: 133px;
        right: -194px;
        top: 124px;
        background: rgba(155, 226, 130, 0.3);
        border-radius: 90.5px;
        @media (max-width: 768px) {
          left: 100.6px;
        }
      }
    `}
`;

const CardContainer = styled.div`
  position: relative;
  width: 275px;
  height: 260px;
  box-sizing: border-box;
  background-color: ${({ $backgroundColor }) =>
    `var(${getCSSVariable($backgroundColor)})` || 'var(--surface)'};
  background-image: ${({ $backgroundImageURL }) =>
    $backgroundImageURL ? `url(${$backgroundImageURL})` : 'none'};
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 30px 24px 20px 24px;
  flex: none;
  overflow: hidden;
  cursor: pointer;
  ${specialShapeStyles}
  @media (max-width: 768px) {
    width: 208px;
    height: 232px;
    padding: 30px 22px 20px 24px;
  }
`;

const Card = ({ backgroundColor, backgroundImageURL, children, ...props }) => (
  <CardContainer
    $backgroundColor={backgroundColor}
    $backgroundImageURL={backgroundImageURL}
    {...props}
  >
    {backgroundImageURL && <Overlay />}
    {children}
  </CardContainer>
);

export { Card };
