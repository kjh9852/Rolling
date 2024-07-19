import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../common/Card';
import Badge from '../common/Badge';
import RELATION from '../../util/relation';
import ReactQuill from 'react-quill';

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
  align-items: flex-start;
  h2 {
    margin-bottom: 6px;
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

export default function MessageList({
  id,
  sender,
  relationship,
  content,
  createdAt,
  profileImageURL,
  font,
}) {
  const findRelationShip = RELATION.find((list) => list.type === relationship);

  const spanStyle = {
    '--background': findRelationShip && `var(${findRelationShip.background})`,
    '--color': findRelationShip && `var(${findRelationShip.color})`,
  };

  const convertDate = createdAt.split('T')[0];

  return (
    <Card>
      <Link to={`message/${id}`}>
        <ListContainer>
          <UserInfo>
            <UserProfile src={profileImageURL} alt={sender} />
            <UserBox>
              <h2>
                From.
                <strong>{sender}</strong>
              </h2>
              <Badge style={spanStyle}>{relationship}</Badge>
            </UserBox>
          </UserInfo>
          <ReactQuill
            font={font}
            value={content}
            readOnly={true}
            theme='bubble'
            className='readMessage'
          />
          <CreateDate>
            <p>{convertDate}</p>
          </CreateDate>
        </ListContainer>
      </Link>
    </Card>
  );
}
