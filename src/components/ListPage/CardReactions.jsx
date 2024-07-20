// CardReactions.jsx
import React from 'react';
import styled from 'styled-components';

const ReactionsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  font-size: 14px;
`;

function emojiFromCodePoint(codePoint) {
  try {
    return String.fromCodePoint(parseInt(codePoint, 16));
  } catch (e) {
    console.error('Invalid code point:', codePoint);
    return '?';
  }
}

const CardReactions = ({ topReactions = [] }) => (
  <ReactionsWrapper>
    {topReactions.map((reaction) => (
      <span key={reaction.emoji}>
        {emojiFromCodePoint(reaction.emoji)} {reaction.count}
      </span>
    ))}
  </ReactionsWrapper>
);

export default CardReactions;
