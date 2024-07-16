import styled from 'styled-components';
import Select from '../Select/Select';

function AddMessage() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 112px;
  `;

  const InputContainer = styled.div`
    display: flex;
    width: 720px;
    flex-direction: column;
    gap: 12px;
  `;

  const InputImageContainer = styled.div`
    display: flex;
    gap: 32px;
  `;

  const ImageCantainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;

  const ImageLabel = styled.label`
    font-size: 16px;
    font-weight: 400;
    color: var(--gray500);
  `;

  const Title = styled.label`
    font-size: 24px;
    font-weight: 700;
  `;

  const Input = styled.input`
    width: 720px;
    height: 50px;
    border: 1px solid var(--gray300);
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  `;

  const Content = styled.div`
    width: 720px;
    height: 260px;
  `;

  const ContentMunu = styled.div`
    width: 720px;
    height: 49px;
    background-color: var(--gray300);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `;

  const ContentTextArea = styled.textarea`
    width: 720px;
    height: 211px;
    border: 1px solid var(--gray300);
    border-top: none;
    resize: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  `;

  return (
    <Container>
      <InputContainer>
        <Title>From.</Title>
        <Input
          id='name'
          name='name'
          type='text'
          placeholder='이름을 입력해주세요.'
        ></Input>
      </InputContainer>
      <InputContainer>
        <Title>프로필 이미지</Title>
        <InputImageContainer>
          <img src='' alt='프로필 이미지' />
          <ImageCantainer>
            <ImageLabel>프로필 이미지를 선택해주세요!</ImageLabel>
            <img src='' alt='프로필 이미지' />
          </ImageCantainer>
        </InputImageContainer>
      </InputContainer>
      <InputContainer>
        <Title>상대와의 관계</Title>
        <Select></Select>
      </InputContainer>
      <InputContainer>
        <Title>내용을 입력해 주세요</Title>
        <Content>
          <ContentMunu></ContentMunu>
          <ContentTextArea></ContentTextArea>
        </Content>
      </InputContainer>
      <InputContainer>
        <Title>폰트 선택</Title>
        <Select></Select>
      </InputContainer>
      <button>생성하기</button>
    </Container>
  );
}

export default AddMessage;
