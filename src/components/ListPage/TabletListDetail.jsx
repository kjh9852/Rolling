import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListSection from './ListSection';
import Container from './Container';
import Title from './Title';
import SlideCardListSection from './SlideCardListSection';
import GoToMakeButton from './GoToMakeButton';
import { getRecipients, getRecipientMessage } from '../../util/api';
import LeftAlign from './LeftAlign';
import styled from 'styled-components';

export default function TabletListDetail() {
  const [topMessages, setTopMessages] = useState([]);
  const [bottomMessages, setBottomMessages] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipients(offset, setMessages, sortBy) {
      try {
        const response = await getRecipients(offset, itemsPerPage, sortBy);
        const recipientsData = response.results;
        const total = response.count;
        setTotalItems(total);

        const allMessages = await Promise.all(
          recipientsData.map(async (recipient) => {
            const recipientMessages = await getRecipientMessage(recipient.id);
            return { ...recipient, messages: recipientMessages };
          })
        );
        setMessages(allMessages);
      } catch (error) {
        console.error('Failed to fetch recipients and messages:', error);
      }
    }

    fetchRecipients(setTopMessages, 'messageCount');
  }, []);

  useEffect(() => {
    async function fetchRecipients(offset, setMessages, sortBy) {
      try {
        const response = await getRecipients(offset, itemsPerPage, sortBy);
        const recipientsData = response.results;
        const total = response.count;
        setTotalItems(total);

        const allMessages = await Promise.all(
          recipientsData.map(async (recipient) => {
            const recipientMessages = await getRecipientMessage(recipient.id);
            return { ...recipient, messages: recipientMessages };
          })
        );
        setMessages(allMessages);
      } catch (error) {
        console.error('Failed to fetch recipients and messages:', error);
      }
    }

    fetchRecipients(setBottomMessages, 'createdAt');
  }, []);

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  const PaddingBox = styled.div`
    width: 100%;
    padding: 0px 20px;
  `;

  return (
    <ListSection>
      <Container>
        <LeftAlign>
          <Title>인기 롤링 페이퍼 🔥</Title>
          <SlideCardListSection
            messages={topMessages}
            totalItems={totalItems}
            handleCardClick={handleCardClick}
            sortBy='messageCount'
          />
        </LeftAlign>
        <LeftAlign>
          <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
          <SlideCardListSection
            messages={bottomMessages}
            totalItems={totalItems}
            handleCardClick={handleCardClick}
            sortBy='createdAt'
          />
        </LeftAlign>
      </Container>
      <PaddingBox>
        <GoToMakeButton to='/post'>나도 만들어보기</GoToMakeButton>
      </PaddingBox>
    </ListSection>
  );
}
