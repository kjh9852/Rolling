import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid #0085ff;
    border-color: #0085ff transparent #0085ff transparent;
    animation: ${spinnerAnimation} 1.2s linear infinite;
  }
`;

export default function LoadingSpinner() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
