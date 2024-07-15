import styled from 'styled-components';
import Card from '../common/Card';

const UserName = styled.article``;
const CreateDate = styled.div``;
const ListCard = styled(Card)``;
// 데이터 받아 온 후 추가예정

export default function MessageList({ userName }) {
  return (
    <ListCard>
      <UserName>
        <h2>{userName}</h2>
        <span>tag</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          nobis aperiam? Cupiditate expedita odit maxime eaque? Nam illum id
          repellat.
        </p>
        <p>date</p>
      </UserName>
    </ListCard>
  );
}
