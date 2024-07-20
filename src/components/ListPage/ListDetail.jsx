import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileListDetail from './MobileListDetail';
import TabletListDetail from './TabletListDetail';
import DesktopListDetail from './DesktopListDetail';

export default function ListDetail() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isMobile && <MobileListDetail />}
      {isTablet && <TabletListDetail />}
      {isDesktop && <DesktopListDetail />}
    </>
  );
}
