import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import Modal from '../ui/Modal';
import RELATION from '../util/relation';
import PrimaryButton from '../components/common/PrimaryButton';

const ModalCard = styled(Card)`
  width: 100%;
  height: 476px;
  padding: 4rem;
  @media (max-width: 768px) {
    padding: 3rem;
    height: 400px;
  }
  @media (max-width: 560px) {
    height: 600px;
  }
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
    @media (max-width: 560px) {
      font-size: 1.6rem;
    }
  }
`;

const CreateDate = styled.div`
  p {
    font-size: 1.4rem;
    color: #999999;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckBtn = styled(PrimaryButton)`
  width: 90px;
  margin-top: 2.4rem;
  padding: 7px 15px;
  border-radius: 6px;
  span {
    font-size: 1.6rem;
  }
`;

export default function MessageDetailPage() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const closeBtn = () => {
    navigate('..');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
          <ReactQuill
            readOnly={true}
            theme='bubble'
            value={data.content}
            className={`detailMessage ${data.font}`}
          />
          <BtnContainer>
            <CheckBtn onClick={closeBtn}>확인</CheckBtn>
          </BtnContainer>
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
