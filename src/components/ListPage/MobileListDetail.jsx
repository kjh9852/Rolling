import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListSection from './ListSection';
import Container from './Container';
import Title from './Title';
import CardListSection from './CardListSection';
import GoToMakeButton from './GoToMakeButton';
import { getRecipients, getRecipientMessage } from '../../util/api';
import LeftAlign from './LeftAlign';

export default function MobileListDetail() {
  const [topMessages, setTopMessages] = useState([]);
  const [bottomMessages, setBottomMessages] = useState([]);
  const [currentTopOffset, setCurrentTopOffset] = useState(0);
  const [currentBottomOffset, setCurrentBottomOffset] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipients(offset, setMessages) {
      try {
        const response = await getRecipients(offset, itemsPerPage);
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

    fetchRecipients(currentTopOffset, setTopMessages);
  }, [currentTopOffset]);

  useEffect(() => {
    async function fetchRecipients(offset, setMessages) {
      try {
        const response = await getRecipients(offset, itemsPerPage);
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

    fetchRecipients(currentBottomOffset, setBottomMessages);
  }, [currentBottomOffset]);

  const handlePrevTopClick = () => {
    if (currentTopOffset > 0) {
      setCurrentTopOffset(currentTopOffset - itemsPerPage);
    }
  };

  const handleNextTopClick = () => {
    if (currentTopOffset + itemsPerPage < totalItems) {
      setCurrentTopOffset(currentTopOffset + itemsPerPage);
    }
  };

  const handlePrevBottomClick = () => {
    if (currentBottomOffset > 0) {
      setCurrentBottomOffset(currentBottomOffset - itemsPerPage);
    }
  };

  const handleNextBottomClick = () => {
    if (currentBottomOffset + itemsPerPage < totalItems) {
      setCurrentBottomOffset(currentBottomOffset + itemsPerPage);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <ListSection>
      <Container>
        <LeftAlign>
          <Title>인기 롤링 페이퍼 🔥</Title>
          <CardListSection
            messages={topMessages}
            handlePrevClick={handlePrevTopClick}
            handleNextClick={handleNextTopClick}
            currentOffset={currentTopOffset}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            handleCardClick={handleCardClick}
          />
        </LeftAlign>
        <LeftAlign>
          <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
          <CardListSection
            messages={bottomMessages}
            handlePrevClick={handlePrevBottomClick}
            handleNextClick={handleNextBottomClick}
            currentOffset={currentBottomOffset}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            handleCardClick={handleCardClick}
          />
        </LeftAlign>
      </Container>
      <GoToMakeButton to='/post'>나도 만들어보기</GoToMakeButton>
    </ListSection>
  );
}
