import React from 'react';
import { Card, CardListWrapper, CardList } from './Cards';
import { PrevButton, NextButton } from './NavigationButton';
import CardContent from './CardContent';
import CardReactions from './CardReactions';

const CardListSection = ({
  title,
  messages,
  currentOffset,
  handlePrevClick,
  handleNextClick,
  handleCardClick,
  totalItems,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <CardListWrapper>
        <PrevButton
          onClick={handlePrevClick}
          disabled={currentOffset === 0}
          isNext={false}
        />
        <CardList>
          {messages.slice(0, 4).map((recipient) => (
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
              />
              <CardReactions reactions={recipient.topReactions} />
            </Card>
          ))}
        </CardList>
        <NextButton
          onClick={handleNextClick}
          disabled={currentOffset + 4 >= totalItems}
          isNext={true}
        />
      </CardListWrapper>
    </div>
  );
};

export default CardListSection;
