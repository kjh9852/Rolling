import { Link } from 'react-router-dom';
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
  z-index: 1000;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  @media (max-width: 1248px) {
    padding: 0 24px;
  }
  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <div>
          <Link to='/'>
            <img src={logoImg} alt='롤링 로고' />
          </Link>
        </div>
        <Link to='/'>롤링 페이퍼 만들기</Link>
      </Navigation>
    </HeaderContainer>
  );
}
