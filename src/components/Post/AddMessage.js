import styled from "styled-components";
import Select from "../Select/Select";

function AddMessage() {


    const Container = styled.div`
    display:flex;
    flex-direction: column;
    gap:50px;
    `;

    const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:12px;
    `;

    const Title = styled.label`
    font-size: 24px;
    font-weight:700;
    `;

    const Input = styled.input`
    width: 720px;
    height: 50px;
    border: 1px solid #CCCCCC;
    border-radius: 8px;
    padding: 12px 16px;
    font-size:16px;
    font-weight:400;
    line-height:26px;

        `;

    return (

        <Container>
            <InputContainer>
                <Title>From.</Title>
                <Input id="name" name="name" type="text" placeholder="이름을 입력해주세요."></Input>
            </InputContainer>
            <InputContainer>
                <Title>프로필 이미지</Title>
                <img src="" alt="프로필 이미지"></img>
            </InputContainer>
            <InputContainer>
                <Title>상대와의 관계</Title>
                <Select></Select>
            </InputContainer>
            <InputContainer>
                <Title>내용을 입력해 주세요</Title>
                <textarea></textarea>
            </InputContainer>
            <InputContainer>
                <Title>폰트 선택</Title>
            </InputContainer>
        </Container >

    )
}

export default AddMessage; 