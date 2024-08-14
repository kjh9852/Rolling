import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Section from '../common/Section';
import Card from '../common/Card';
import PrimaryButton from '../common/PrimaryButton';
import MessageList from './MessageList';
import LoadingSpinner from '../../ui/Loading/LoadingSpinner';
import { getUserMessage, deleteMessage, deleteUser } from '../../util/api';
import BACKGROUND_COLOR from '../../util/backgroundColor';

const DetailSection = styled(Section)`
  max-width: 100%;
  min-height: 100svh;
  padding-top: 2rem;
  margin-top: 13.3rem;
  ${({ $backgroundImage, $background }) =>
    $backgroundImage
      ? css`
          background-image: url(${$backgroundImage});
        `
      : css`
          background: var(${$background});
        `}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  @media (max-width: 768px) {
    margin-top: 8.4rem;
    padding-bottom: 20rem;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  padding-bottom: 5rem;
  margin: 0 auto;
  @media (max-width: 1248px) {
    padding: 0 24px;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 1.1rem;
  gap: 2.4rem;
  padding-bottom: 5rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
    margin-top: 2rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1.5rem;
  }
`;

const LinkMessage = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all.3s ease;
  div {
    position: relative;
    width: 56px;
    height: 56px;
    background: var(--gray500);
    border-radius: 160px;
    transition: all.3s ease;
  }
  div:before,
  div:after {
    position: absolute;
    content: '';
    width: 3px;
    height: 23px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background: var(--white);
  }
  div:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:hover {
    div {
      transform: rotate(180deg);
      background: var(--gray700);
    }
    transform: scale(1.05);
    box-shadow: 0px 4px 3px -1px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1248px) {
    height: 284px;
  }
  @media (max-width: 768px) {
    height: 230px;
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
  @media (max-width: 1248px) {
    position: fixed;
    width: calc(100% - 48px);
    bottom: 1rem;
    z-index: 5;
  }
  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

const EditButton = styled(PrimaryButton)`
  padding: 7px 16px;
  font-size: 1.6rem;
  border-radius: 6px;
  @media (max-width: 1248px) {
    display: inline-block;
    width: 100%;
    border-radius: 12px;
    padding: 14px 16px;
    span {
      width: 100%;
      text-align: center;
      display: inline-block;
      font-size: 1.8rem;
    }
  }
`;
const DeleteButton = styled(EditButton)`
  background-color: var(--error);
  &:hover {
    background-color: #c93636;
  }
  &:active {
    background-color: #b63131;
  }
  &:focus {
    background-color: #b63131;
  }
`;
const ConfirmButton = styled(PrimaryButton)`
  margin-left: 1.2rem;
  padding: 7px 16px;
  font-size: 1.6rem;
  border-radius: 6px;

  @media (max-width: 1248px) {
    width: 100%;
    border-radius: 12px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 1.8rem;
    }
  }
`;

const EmptyText = styled.h2`
  font-size: 2.4rem;
  ${({ $userImageBackground }) =>
    $userImageBackground
      ? css`
          color: var(--white);
          text-shadow: -1px 0px var(--black), 0px 1px var(--black),
            1px 0px var(--black), 0px -1px var(--black);
        `
      : css`
          color: var(--black);
        `};
`;

export default function PostDetail({ userData }) {
  const { postId } = useParams();
  const observerRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [postMessage, setPostMessage] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const editPaths = '/edit';

  useEffect(() => {
    if (location.pathname.includes(editPaths)) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [location]);

  const fetchUserMessage = async () => {
    setLoading(true);
    try {
      const messages = await getUserMessage({ id: postId, limit: '5', offset });
      const { results, next } = messages;
      setPostMessage((prevList) => [...prevList, ...results]);
      if (next === null) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleDeleteMessage = async (event, id) => {
    event.preventDefault();
    try {
      await deleteMessage(id);
      setPostMessage((prevList) =>
        prevList.filter((message) => message.id !== id)
      );
      navigate({ replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(postId);
      navigate('/list');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteEdit = async () => {
    navigate('.');
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      setLoading(true);
      setTimeout(() => {
        setOffset((prev) => prev + 5);
      }, [700]);
    }
  };

  useEffect(() => {
    const option = {
      threshold: 1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.disconnect(observerRef.current);
      }
    };
  }, [loading]);

  useEffect(() => {
    fetchUserMessage();
  }, [offset]);

  const userBackground = BACKGROUND_COLOR.find(
    (list) => list.type === userData.backgroundColor
  );
  return (
    <DetailSection
      $background={userBackground.background}
      $backgroundImage={userData.backgroundImageURL}
    >
      <Container>
        <EditButtonContainer>
          {!isEdit ? (
            <EditButton to='edit'>편집하기</EditButton>
          ) : (
            <>
              <DeleteButton onClick={handleDeleteUser}>삭제하기</DeleteButton>
              <ConfirmButton onClick={handleCompleteEdit}>완료</ConfirmButton>
            </>
          )}
        </EditButtonContainer>
        <GridContainer>
          {!isEdit ? (
            <Link to='message'>
              <LinkMessage>
                <div />
              </LinkMessage>
            </Link>
          ) : (
            !postMessage.length && (
              <EmptyText $userImageBackground={userData.backgroundImageURL}>
                삭제할 메세지가 없습니다.
              </EmptyText>
            )
          )}

          {postMessage.map((list) => (
            <MessageList
              key={list.id}
              list={list}
              handleDeleteMessage={handleDeleteMessage}
            />
          ))}
        </GridContainer>
        {!loading ? <div ref={observerRef}></div> : <LoadingSpinner />}
      </Container>
    </DetailSection>
  );
}
