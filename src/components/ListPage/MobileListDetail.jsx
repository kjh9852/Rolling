import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListSection from './ListSection';
import Container from './Container';
import Title from './Title';
import CardListSection from './CardListSection';
import GoToMakeButton from './GoToMakeButton';
import { getRecipients, getRecipientMessage } from '../../util/api';
import LeftAlign from './LeftAlign';

export default function DesktopListDetail() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentTopOffset, setCurrentTopOffset] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 1;
  const navigate = useNavigate();

  const fetchUser = async () => {
    setLoading(true);
    try {
      const resposne = await fetch(
        `https://rolling-api.vercel.app/8-8/recipients/?limit=10&offset=${offset}`
      );
      const { results, ...data } = await resposne.json();
      setMessages((prev) => [...prev, ...results]);
      console.log(results,data);
      if (data.next !== null) {
        setOffset((prev) => prev + 10);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [offset]);

  const sortMessages = [...messages].sort(
    (a, b) => b.messageCount - a.messageCount
  );
  const dateSortMessages = [...messages].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <ListSection>
      <Container>
        <Title>인기 롤링 페이퍼 🔥</Title>
        <CardListSection
          loading={loading}
          messages={sortMessages}
          currentOffset={currentTopOffset}
          handleCardClick={handleCardClick}
        />
        <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
        <CardListSection
          loading={loading}
          messages={dateSortMessages}
          currentOffset={currentTopOffset}
          handleCardClick={handleCardClick}
        />
      </Container>
      <GoToMakeButton to='/post'>나도 만들어보기</GoToMakeButton>
    </ListSection>
  );
}
