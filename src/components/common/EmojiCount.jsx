import { Emoji } from 'emoji-picker-react';
import styled from 'styled-components';

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.54);
  border-radius: 32px;
  span {
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
  }
`;

export default function EmojiCount({ emojiCode, emojiCount }) {
  return (
    <List>
      <Emoji unified={emojiCode} size='20' />
      <span>{emojiCount}</span>
    </List>
  );
}
