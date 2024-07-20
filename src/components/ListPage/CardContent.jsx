import React from 'react';
import styled from 'styled-components';

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RecipientName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: var(--gray900);
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const MessageCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: var(--gray700);
  flex: none;
  order: 2;
  flex-grow: 0;
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;

const CardContent = ({ recipientName, messageCount }) => {
  return (
    <CardContentContainer>
      <RecipientName>To. {recipientName}</RecipientName>
      <MessageCount>
        <span>{messageCount}</span>명이 작성했어요!
      </MessageCount>
    </CardContentContainer>
  );
};

export default CardContent;
