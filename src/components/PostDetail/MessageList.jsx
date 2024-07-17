import styled from 'styled-components';
import Card from '../common/Card';

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eeeeee;
`;
const UserProfile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 14rem;
`;
const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
  }
`;
const Content = styled.p`
  flex: 1 0;
  font-size: 1.8rem;
  padding-top: 16px;
  font-family: ${(props) => props.font};
`;
const CreateDate = styled.div`
  p {
    font-size: 1.2rem;
    color: #999999;
  }
`;

const ListCard = styled(Card)``;
// 데이터 받아 온 후 추가예정

export default function MessageList({
  sender,
  relationship,
  content,
  createdAt,
  profileImageURL,
  font,
}) {
  return (
    <ListCard>
      <ListContainer>
        <UserInfo>
          <UserProfile src={profileImageURL} alt={sender} />
          <UserBox>
            <h2>
              From.
              <strong>{sender}</strong>
            </h2>
            <span>{relationship}</span>
          </UserBox>
        </UserInfo>
        <Content font={font}>{content}</Content>
        <CreateDate>
          <p>{createdAt}</p>
        </CreateDate>
      </ListContainer>
    </ListCard>
  );
}
