import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
  position: absolute;
  height: 260px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.54) 0%,
    rgba(0, 0, 0, 0.54) 100%
  );
  z-index: 1;
`;

const Overlay = () => {
  return <OverlayContainer />;
};

export default Overlay;
