import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Section from '../common/Section';
import PrimaryButton from '../common/PrimaryButton';
import { getRecipients, getRecipientMessage } from '../../util/api';

const ListSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 50px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  font-weight: 700;
  color: var(--black);
`;

const CardListWrapper = styled.div`
  position: relative;
  width: 1160px;
  overflow: hidden;
`;

const CardList = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  gap: 20px;
`;

const Card = styled.div`
  width: 275px;
  height: 260px;
  background-color: var(--surface);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 24px 20px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: var(--gray900);
`;

const CardContent = styled.p`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: var(--gray700);
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: default;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 0;
`;

const NextButton = styled(NavigationButton)`
  right: 0;
`;

const GoToMakeButton = styled(PrimaryButton)`
  padding: 14px 60px;
  margin-bottom: 218px;
  line-height: 2.8rem;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  span {
    display: flex;
    justify-content: center;
    width: 160px;
  }
  &:hover {
    background-color: var(--purple700);
  }
  &:active {
    background-color: var(--purple800);
  }
  &:focus {
    background-color: var(--purple800);
  }
`;

export default function ListDetail() {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipients() {
      try {
        const recipientsData = await getRecipients();

        const allMessages = await Promise.all(
          recipientsData.map(async (recipient) => {
            const recipientMessages = await getRecipientMessage(recipient.id);
            return { ...recipient, messages: recipientMessages };
          })
        );
        setMessages(allMessages);
        console.log(allMessages); // 데이터를 확인하기 위해 추가
      } catch (error) {
        console.error('Failed to fetch recipients and messages:', error);
      }
    }

    fetchRecipients();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(messages.length / 4) - 1)
    );
  };

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <ListSection>
      <Container>
        <Title>인기 롤링 페이퍼 🔥</Title>
        <CardListWrapper>
          <PrevButton onClick={handlePrevClick} disabled={currentIndex === 0}>
            &#10094;
          </PrevButton>
          <CardList
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {messages.map((recipient) => (
              <Card
                key={recipient.id}
                onClick={() => handleCardClick(recipient.id)}
              >
                <CardTitle>{recipient.name}</CardTitle>
                <CardContent>
                  {recipient.messages[0]?.content || 'No content available'}
                </CardContent>
              </Card>
            ))}
          </CardList>
          <NextButton
            onClick={handleNextClick}
            disabled={currentIndex === Math.ceil(messages.length / 4) - 1}
          >
            &#10095;
          </NextButton>
        </CardListWrapper>
        <Title>최근에 만든 롤링 페이퍼 ⭐️️</Title>
        <CardListWrapper>
          <PrevButton onClick={handlePrevClick} disabled={currentIndex === 0}>
            &#10094;
          </PrevButton>
          <CardList
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {messages.map((recipient) => (
              <Card
                key={recipient.id}
                onClick={() => handleCardClick(recipient.id)}
              >
                <CardTitle>{recipient.name}</CardTitle>
                <CardContent>
                  {recipient.messages[0]?.content || 'No content available'}
                </CardContent>
              </Card>
            ))}
          </CardList>
          <NextButton
            onClick={handleNextClick}
            disabled={currentIndex === Math.ceil(messages.length / 4) - 1}
          >
            &#10095;
          </NextButton>
        </CardListWrapper>
      </Container>
      <GoToMakeButton to='/post'>나도 만들어보기</GoToMakeButton>
    </ListSection>
  );
}
