import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../assets/image/logo.png';

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <div>
          <Link to="/">
            <img src={logoImg} alt="롤링 로고" />
          </Link>
        </div>
        <Link to="/">롤링 페이퍼 만들기</Link>
      </Navigation>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  border-bottom: 1px solid #ededed;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 65px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
  @media (max-width: 360px) {
    padding: 0 16px;
  }
`;
