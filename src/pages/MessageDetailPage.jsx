import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Modal from '../ui/Modal';
import RELATION from '../util/relation';

const ModalCard = styled(Card)`
  width: 600px;
  max-width: 600px;
  height: 476px;
  padding: 4rem;
`;

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
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
  flex: 1 0;
  h2 {
    margin-bottom: 6px;
    font-size: 2rem;
  }
`;
const Content = styled.div`
  overflow-y: scroll;
  max-height: 25rem;
  flex: 1 0;
  font-size: 1.8rem;
  margin-top: 16px;
  p {
    font-family: ${(props) => props.font};
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ededed;
    border-radius: 12px 12px 12px 12px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #9797a0;
  }
`;

const CreateDate = styled.div`
  p {
    font-size: 1.4rem;
    color: #999999;
  }
`;

export default function MessageDetailPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const data = useLoaderData();

  const findRelationShip = RELATION.find(
    (list) => list.type === data.relationship
  );

  const spanStyle = {
    '--background': findRelationShip && `var(${findRelationShip.background})`,
    '--color': findRelationShip && `var(${findRelationShip.color})`,
  };
  const convertDate = data.createdAt.split('T')[0];

  return (
    <Modal>
      <ModalCard>
        <ListContainer>
          <UserInfo>
            <UserProfile src={data.profileImageURL} alt={data.sender} />
            <UserBox>
              <h2>
                From.
                <strong>{data.sender}</strong>
              </h2>
              <Badge style={spanStyle}>{data.relationship}</Badge>
            </UserBox>
            <CreateDate>
              <p>{convertDate}</p>
            </CreateDate>
          </UserInfo>
          <Content font={data.font}>
            <p>{data.content}</p>
          </Content>
        </ListContainer>
      </ModalCard>
    </Modal>
  );
}

export async function loader({ params }) {
  const id = params.messageId;
  const response = await fetch(
    `https://rolling-api.vercel.app/8-8/messages/${id}/`
  );
  const data = await response.json();
  return data;
}
