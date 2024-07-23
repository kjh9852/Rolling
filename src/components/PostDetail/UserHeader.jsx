import { useParams, useLocation } from 'react-router-dom';
import UserActionComponent from './UserActionComponent';
import PrimaryButton from '../common/PrimaryButton';
import MessageCount from '../common/MessageCount';
import styled from 'styled-components';
import './emoji.css';
const UserContainer = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 68px;
  background: var(--white);
  box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2);
  z-index: 10;
  @media (max-width: 768px) {
    height: auto;
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
  @media (max-width: 1248px) {
    padding: 0 24px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0px;
  }
  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      border-bottom: 1px solid #ededed;
      padding: 0 20px;
    }
  }
`;

const UserName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 12px 0;
  }
`;

const BackButton = styled(PrimaryButton)`
  display: none;
  align-items: center;
  padding: 5px 14px;
  border-radius: 6px;
  svg {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const UserAction = styled.div`
  display: flex;
  align-items: center;
  gap: 57px;
  height: 36px;
  @media (max-width: 768px) {
    padding: 8px 20px;
    height: auto;
  }
`;

const UserCountContainer = styled.div`
  position: relative;
  height: 100%;
  &:before {
    position: absolute;
    content: '';
    width: 1px;
    height: 28px;
    top: 5px;
    right: -29px;
    background: #ededed;
  }
  @media (max-width: 880px) {
    display: none;
  }
`;

const CountContainer = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  span {
    margin-left: 11px;
    font-size: 1.8rem;
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
  const { postId } = useParams();
  const location = useLocation();
  const detailPagePath = `/post/${postId}`;

  const existingDetailpath =
    detailPagePath === location.pathname && window.innerWidth <= '768';

  const allWriter =
    userData.messageCount >= 9 ? '+6' : `+${userData.messageCount - 3}`;

  return (
    <UserContainer>
      <UserInfo>
        <div>
          <UserName>{`To. ${userData.name}`}</UserName>
          <BackButton isSvg={true} to='/list' />
        </div>
        <UserAction>
          <UserCountContainer>
            <CountContainer>
              {userData.recentMessages.map((img) => (
                <MessageCount
                  key={img.id}
                  profileImageURL={img.profileImageURL}
                  sender={img.sender}
                />
              ))}
              {userData.messageCount > 3 && <TotalUser>{allWriter}</TotalUser>}
              {userData.messageCount > 0 ? (
                <span>
                  <b>{userData.messageCount}</b>명이 작성했어요!
                </span>
              ) : (
                <span>메세지를 남겨보세요!</span>
              )}
            </CountContainer>
          </UserCountContainer>
          <UserActionComponent
            shareName={userData.name}
            topReaction={userData.topReactions}
            actionEmoji={userReaction}
          />
        </UserAction>
      </UserInfo>
    </UserContainer>
  );
}
