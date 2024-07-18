import styled from 'styled-components';

const List = styled.li`
  margin: 0 -6px;
  img {
    width: 28px;
    height: 28px;
    border: 1px solid var(--white);
    border-radius: 14rem;
  }
`;

export default function MessageCount({ profileImageURL, sender }) {
  return (
    <List>
      <img src={profileImageURL} alt={sender} />
    </List>
  );
}
