import styled from 'styled-components';

const UserContainer = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 68px;
  background: #ededed;
`;
const UserInfo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function UserHeader() {
  return (
    <UserContainer>
      <UserInfo>
        <h2>UserName</h2>
      </UserInfo>
    </UserContainer>
  );
}
