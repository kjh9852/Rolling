import React from 'react';
import styled from 'styled-components';
import EmojiBadge from '../common/EmojiBadge';

const ReactionsContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
  margin-top: 16px;
  position: relative;
`;

const CustomEmojiBadge = styled(EmojiBadge)`
  justify-content: center;
  gap: 4px;
`;

const Line = styled.div`
  width: 227px;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
`;

const CardReactions = ({ reactions }) => {
  return (
    <>
      <Line />
      <ReactionsContainer>
        {reactions &&
          reactions.map((reaction) => (
            <CustomEmojiBadge
              key={reaction.emoji}
              emojiCode={reaction.emoji}
              emojiCount={reaction.count}
            />
          ))}
      </ReactionsContainer>
    </>
  );
};

export default CardReactions;
