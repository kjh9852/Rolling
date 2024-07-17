import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../common/Card';
import MessageList from './MessageList';
import Section from '../common/Section';

const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1248px) {
    padding: 0 24px;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const DetailSection = styled(Section)`
  max-width: 100%;
  margin-top: 13.3rem;
  background: var(--custom-bg-color);

  @media (max-width: 768px) {
    margin-top: 8.4rem;
  }
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  padding-top: 11.3rem;
  padding-bottom: 24.6rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 9.3rem;
    gap: 1.6rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 3.2rem;
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
  }
`;

export default function PostDetail() {
  const [postMessage, setPostMessage] = useState([]);
  const { id } = useParams();

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/${id}/messages/?limit=5`
      );
      if (!response.ok) {
        throw new Error('데이터 불러오기 실패');
      }
      const { results } = await response.json();
      console.log(results);
      setPostMessage(results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <DetailSection>
      <Container>
        <FlexContainer>
          <Link to='message'>
            <LinkMessage>
              <div></div>
            </LinkMessage>
          </Link>
          {postMessage.map((list) => (
            <MessageList
              key={list.id}
              sender={list.sender}
              relationship={list.relationship}
              content={list.content}
              createdAt={list.createdAt}
              profileImageURL={list.profileImageURL}
              font={list.font}
            />
          ))}
        </FlexContainer>
      </Container>
    </DetailSection>
  );
}
