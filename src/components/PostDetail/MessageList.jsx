import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { RELATIONSHIP } from '../../util/selectOptions';
import MessageContainer from './MessageContainer';
import Card from '../common/Card';
import Badge from '../common/Badge';
import OutlineButton from '../common/OutlineButton';
import deleteIcon from '../../assets/image/deleted.png';

const SectionContainer = styled(Card)`
  overflow: hidden;
  transition: all.3s ease;
  ${({ $isEdit }) =>
    !$isEdit &&
    `&:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2);
    }
    `}
  @media (max-width: 1248px) {
    height: 284px;
  }
  @media (max-width: 768px) {
    height: 230px;
  }
`;

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--gray200);
`;

const UserProfile = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  object-position: top;
  border-radius: 14rem;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin-bottom: 6px;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
`;

const SenderContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const CreateDate = styled.div`
  p {
    font-size: 1.2rem;
    color: var(--gray400);
  }
`;

const DeleteBtn = styled(OutlineButton)`
  padding: 8px;
  font-size: 0;
`;

export default function MessageList({ list, handleDeleteMessage }) {
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const editPaths = '/edit';
  useEffect(() => {
    if (location.pathname.includes(editPaths)) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [location]);

  const findRelationShip = RELATIONSHIP.find(
    (relation) => relation.type === list.relationship
  );

  const convertDate = new Date(list.createdAt).toLocaleDateString('ko-KR');

  return (
    <SectionContainer $isEdit={isEdit}>
      <MessageContainer $isEdit={isEdit} to={`message/${list.id}`}>
        <ListContainer>
          <UserInfo>
            <SenderContainer>
              <UserProfile src={list.profileImageURL} alt={list.sender} />
              <UserBox>
                <h2>
                  From.
                  <strong>{list.sender}</strong>
                </h2>
                <Badge $findRelationShip={findRelationShip}>
                  {list.relationship}
                </Badge>
              </UserBox>
            </SenderContainer>
            {isEdit && (
              <DeleteBtn
                haveImg={true}
                imgSrc={deleteIcon}
                onClick={(event) => handleDeleteMessage(event, list.id)}
              />
            )}
          </UserInfo>
          <ReactQuill
            readOnly={true}
            theme='bubble'
            value={list.content}
            className={`readMessage ${list.font}`}
          />
          <CreateDate>
            <p>{convertDate}</p>
          </CreateDate>
        </ListContainer>
      </MessageContainer>
    </SectionContainer>
  );
}
