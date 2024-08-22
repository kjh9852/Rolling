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
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--white);
  }
  @media (max-width: 768px) {
    padding: 6px 10px;
    span {
      font-size: 1.2rem;
    }
  }
`;

let size = '20';
if (window.innerWidth <= 768) {
  size = '15';
}

export default function EmojiBadge({ className, emojiCode, emojiCount }) {
  return (
    <List className={className}>
      <Emoji unified={emojiCode} size={size} />
      <span>{emojiCount}</span>
    </List>
  );
}
