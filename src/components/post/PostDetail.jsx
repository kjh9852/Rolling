import styled from 'styled-components';
import MessageList from './MessageList';
import Section from '../common/Section';

export default function PostDetail() {
  const Container = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 1248px) {
      padding: 0 24px;
    }
    @media (max-width: 640px) {
      padding: 0 20px;
    }
  `;

  const DetailSection = styled(Section)`
    max-width: 100%;
    margin-top: 13.3rem;
    background: var(--green100);
  `;

  const FlexContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    padding-top: 11.3rem;
    padding-bottom: 24.6rem;
    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
      padding-top: 9.3rem;
      gap: 1.6rem;
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr);
      padding-top: 3.2rem;
    }
  `;

  return (
    <DetailSection>
      <Container>
        <FlexContainer>
          <MessageList userName="admin" />
          <MessageList userName="멍멍이" />
          <MessageList userName="잔망루피" />
          <MessageList userName="스프린트" />
          <MessageList userName="흐음" />
          <MessageList userName="테스트" />
        </FlexContainer>
      </Container>
    </DetailSection>
  );
}
