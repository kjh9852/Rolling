import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileLandingDetail from './MobileLandingDetail';
import TabletLandingDetail from './TabletLandingDetail';
import DesktopLandingDetail from './DesktopLandingDetail';

export default function LandingDetail() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isMobile && <MobileLandingDetail />}
      {isTablet && <TabletLandingDetail />}
      {isDesktop && <DesktopLandingDetail />}
    </>
  );
}
