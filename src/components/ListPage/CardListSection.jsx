import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from './Cards';
import { PrevButton, NextButton } from './NavigationButton';
import CardContent from './CardContent';
import CardReactions from './CardReactions';
import AnimatedCardList from './AnimatedCardList';
import { getRecipients } from '../../util/api';

const CardListWrapper = styled.div`
  position: relative;
  width: 1160px;
  height: 260px;
`;

const CardListSection = ({ title, handleCardClick }) => {
  const [messages, setMessages] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const fetchRecipients = async () => {
      const data = await getRecipients();
      setMessages(data.results);
    };

    fetchRecipients();
  }, []);

  const handlePrevClick = () => {
    if (currentOffset > 0) {
      setCurrentOffset(currentOffset - 1);
    }
  };

  const handleNextClick = () => {
    if (currentOffset < Math.floor(messages.length / 4)) {
      setCurrentOffset(currentOffset + 1);
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <CardListWrapper>
        <PrevButton
          onClick={handlePrevClick}
          disabled={currentOffset === 0}
          isNext={false}
        />
        <AnimatedCardList
          cards={messages.map((recipient) => (
            <Card
              key={recipient.id}
              onClick={() => handleCardClick(recipient.id)}
              backgroundColor={recipient.backgroundColor}
              backgroundImageURL={recipient.backgroundImageURL}
            >
              <CardContent
                recipientId={recipient.id}
                recipientName={recipient.name}
                messageCount={recipient.messageCount}
                backgroundImageURL={recipient.backgroundImageURL}
              />
              <CardReactions reactions={recipient.topReactions} />
            </Card>
          ))}
          currentOffset={currentOffset}
        />
        <NextButton
          onClick={handleNextClick}
          disabled={currentOffset >= Math.floor(messages.length / 4)}
          isNext={true}
        />
      </CardListWrapper>
    </div>
  );
};

export default CardListSection;
