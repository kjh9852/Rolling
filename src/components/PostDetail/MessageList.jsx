import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MessageContainer from './MessageContainer';
import Card from '../common/Card';
import Badge from '../common/Badge';
import OutlineButton from '../common/OutlineButton';
import RELATION from '../../util/relation';
import ReactQuill from 'react-quill';
import deleteIcon from '../../assets/image/deleted.png';
const SectionContainer = styled(Card)`
  transition: all.3s ease;
  ${({ isEdit }) =>
    !isEdit &&
    `&:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2);
    }
    `}
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
  border-bottom: 1px solid #eeeeee;
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
  }
`;
const SenderContainer = styled.div`
  display: flex;
  gap: 1.4rem;
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

const DeleteBtn = styled(OutlineButton)`
  padding: 8px;
  font-size: 0;
`;

export default function MessageList({
  id,
  sender,
  relationship,
  content,
  createdAt,
  profileImageURL,
  handleDeleteMessage,
  font,
}) {
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

  const findRelationShip = RELATION.find((list) => list.type === relationship);

  const spanStyle = {
    '--background': findRelationShip && `var(${findRelationShip.background})`,
    '--color': findRelationShip && `var(${findRelationShip.color})`,
  };
  const convertDate = createdAt.split('T')[0];

  return (
    <SectionContainer isEdit={isEdit}>
      <MessageContainer isEdit={isEdit} to={`message/${id}`}>
        <ListContainer>
          <UserInfo>
            <SenderContainer>
              <UserProfile src={profileImageURL} alt={sender} />
              <UserBox>
                <h2>
                  From.
                  <strong>{sender}</strong>
                </h2>
                <Badge style={spanStyle}>{relationship}</Badge>
              </UserBox>
            </SenderContainer>
            {isEdit && (
              <DeleteBtn
                haveImg={true}
                imgSrc={deleteIcon}
                onClick={(event) => handleDeleteMessage(event, id)}
              />
            )}
          </UserInfo>
          <ReactQuill
            readOnly={true}
            theme='bubble'
            value={content}
            className={`readMessage ${font}`}
          />
          <CreateDate>
            <p>{convertDate}</p>
          </CreateDate>
        </ListContainer>
      </MessageContainer>
    </SectionContainer>
  );
}
