import styled from 'styled-components';
import Section from '../common/Section';

const ListSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopDiv = styled.div`
  margin-top: 65px;
`;

export default function ListDetail() {
  return (
    <ListSection>
      <TopDiv>내용</TopDiv>
    </ListSection>
  );
}
