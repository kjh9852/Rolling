import { Emoji } from 'emoji-picker-react';
import styled from 'styled-components';

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 0;
  gap: 4px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.54);
  border-radius: 32px;
  span {
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
  }
`;

export default function EmojiBadge({ emojiCode, emojiCount, className }) {
  return (
    <List className={className}>
      <Emoji unified={emojiCode} size='16' />
      <span>{emojiCount}</span>
    </List>
  );
}
