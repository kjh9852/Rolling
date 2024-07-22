import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Section from '../common/Section';
import Card from '../common/Card';
import PrimaryButton from '../common/PrimaryButton';
import MessageList from './MessageList';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { getUserMessage, deleteMessage, deleteUser } from '../../util/api';
import BACKGROUND_COLOR from '../../util/backgroundColor';

const DetailSection = styled(Section)`
  max-width: 100%;
  height: 100vh;
  margin-top: 13.3rem;
  background: ${({ background }) => background || 'transparent'};
  background-image: ${({ backgroundImage }) => backgroundImage || 'none'};
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
  padding-top: 6.3rem;
  @media (max-width: 1248px) {
    padding-top: 9.3rem;
  }
  @media (max-width: 640px) {
    padding-top: 3rem;
  }
`;

const EditButton = styled(PrimaryButton)`
  padding: 7px 16px;
  font-size: 1.6rem;
  border-radius: 6px;
`;
const ConfirmButton = styled(PrimaryButton)`
  margin-left: 1.2rem;
  padding: 7px 16px;
  font-size: 1.6rem;
  border-radius: 6px;
`;
export default function PostDetail({ userData }) {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [postMessage, setPostMessage] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const observerRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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
      const messages = await getUserMessage({ id: postId, offset });
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
    navigate('./');
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
  const userImageBackground = userData.backgroundImageURL;
  const backgroundStyle = userImageBackground
    ? { backgroundImage: `url(${userImageBackground})` }
    : { background: `var(${userBackground.background})` };

  return (
    <DetailSection
      background={backgroundStyle.background}
      backgroundImage={backgroundStyle.backgroundImage}
    >
      <Container>
        {!isEdit ? (
          <EditButtonContainer>
            <EditButton to='edit'>편집하기</EditButton>
          </EditButtonContainer>
        ) : (
          <EditButtonContainer>
            <EditButton onClick={handleDeleteUser}>삭제하기</EditButton>
            <ConfirmButton onClick={handleCompleteEdit}>완료</ConfirmButton>
          </EditButtonContainer>
        )}
        <GridContainer>
          {!isEdit && (
            <Link to='message'>
              <LinkMessage>
                <div />
              </LinkMessage>
            </Link>
          )}
          {postMessage.map((list) => (
            <MessageList
              id={list.id}
              key={list.id}
              sender={list.sender}
              relationship={list.relationship}
              content={list.content}
              createdAt={list.createdAt}
              profileImageURL={list.profileImageURL}
              font={list.font}
              handleDeleteMessage={handleDeleteMessage}
            />
          ))}
        </GridContainer>
        {!loading ? <div ref={observerRef}></div> : <LoadingSpinner />}
      </Container>
    </DetailSection>
  );
}