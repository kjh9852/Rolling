import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PrevButton, NextButton } from './NavigationButton';
import CardContent from './CardContent';
import AnimatedCardList from './AnimatedCardList';
import EllipsisLoading from '../../ui/EllipsisLoading';

const CardListWrapper = styled.div`
  position: relative;
  width: 1160px;
  height: 260px;
  @media (max-width: 1248px) {
    width: 100%;
  }
`;

const CardListSection = ({ messages, loading }) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (currentOffset > 0) {
      setCurrentOffset((prevOffset) => prevOffset - 1);
    }
  };

  const handleNextClick = () => {
    if ((currentOffset + 1) * 4 < messages.length) {
      setCurrentOffset((prevOffset) => prevOffset + 1);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };
  return (
    <>
      <CardListWrapper>
        <PrevButton
          onClick={handlePrevClick}
          disabled={currentOffset === 0}
          isNext={false}
        />
        {loading ? (
          <EllipsisLoading />
        ) : (
          <AnimatedCardList currentOffset={currentOffset}>
            {messages.map((recipient) => (
              <CardContent
                id={recipient.id}
                key={`post-${recipient.id}`}
                recipientName={recipient.name}
                backgroundColor={recipient.backgroundColor}
                backgroundImageURL={recipient.backgroundImageURL}
                messageCount={recipient.messageCount}
                profileImage={recipient.recentMessages}
                topReaction={recipient.topReactions}
                handleCardClick={() => handleCardClick(recipient.id)}
              />
            ))}
          </AnimatedCardList>
        )}
        <NextButton
          onClick={handleNextClick}
          disabled={(messages.length - 4) / currentOffset <= 4}
          isNext={true}
        />
      </CardListWrapper>
    </>
  );
};

export default CardListSection;
