import UserActionComponent from './UserActionComponent';
import MessageCount from '../common/MessageCount';
import styled from 'styled-components';
import './emoji.css';

const UserContainer = styled.div`
  position: fixed;
  top: 66px;
  left: 0;
  width: 100%;
  height: 68px;
  background: var(--white);
  box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2);
  z-index: 10;
  @media (max-width: 768px) {
    top: 0px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const UserName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
`;
const UserAction = styled.div`
  display: flex;
  align-items: center;
  gap: 57px;
  height: 36px;
`;

const CountContainer = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  span {
    margin-left: 11px;
    font-size: 1.8rem;
  }
  ::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 28px;
    top: -4px;
    right: -29px;
    background: #ededed;
  }
`;

const TotalUser = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -6px;
  width: 28px;
  height: 28px;
  font-size: 12px;
  border-radius: 32px;
  border: 1px solid #e3e3e3;
  background: var(--white);
`;

export default function UserHeader({ userData, userReaction }) {
  const AllWriter =
    userData.messageCount >= 9 ? '+6' : `+${userData.messageCount - 3}`;

  return (
    <UserContainer>
      <UserInfo>
        <UserName>{`To. ${userData.name}`}</UserName>
        <UserAction>
          <CountContainer>
            {userData.recentMessages.map((img) => (
              <MessageCount
                key={img.id}
                profileImageURL={img.profileImageURL}
                sender={img.sender}
              />
            ))}
            {userData.messageCount > 3 && <TotalUser>{AllWriter}</TotalUser>}
            {userData.messageCount > 0 ? (
              <span>
                <b>{userData.messageCount}</b>명이 작성했어요!
              </span>
            ) : (
              <span>메세지를 남겨보세요!</span>
            )}
          </CountContainer>
          <UserActionComponent
            topReaction={userData.topReactions}
            actionEmoji={userReaction}
          />
        </UserAction>
      </UserInfo>
    </UserContainer>
  );
}
