import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import OutlineButton from '../components/common/OutlineButton';
import PrimaryButton from '../components/common/PrimaryButton';
import styled from 'styled-components';
import logoImg from '../assets/image/logo.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid #ededed;
  background: var(--white);
  z-index: 10;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 64px;
  margin: 0 auto;
  @media (max-width: 1248px) {
    padding: 0 24px;
  }
  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

const BackButton = styled(PrimaryButton)`
  padding: 7px 16px;
  font-size: 1.6rem;
  border-radius: 6px;
`;

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { postId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const excludedPaths = ['/', '/list'];
  const detailPagePath = `/post/${postId}`;

  const existingPath = excludedPaths.includes(location.pathname);
  const existingDetailpath = detailPagePath === location.pathname;

  if (isMobile && !existingPath) {
    return null;
  }

  return (
    <HeaderContainer>
      <Navigation>
        <div>
          <Link to='/'>
            <img src={logoImg} alt='롤링 로고' />
          </Link>
        </div>
        {existingPath && (
          <OutlineButton to='/post'>롤링 페이퍼 만들기</OutlineButton>
        )}
        {existingDetailpath && <BackButton to='/list'>이전으로</BackButton>}
      </Navigation>
    </HeaderContainer>
  );
}
