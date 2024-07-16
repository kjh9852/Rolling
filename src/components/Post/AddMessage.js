import { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "../Select/Select";
import Section from "../common/Section";
import NameInput from "../Input/NameInput";
import ContentArea from "../TextArea/ContentArea";
import ProfileImageList from "../ProfileImageList/ProfileImageList";
import { getProfileImage } from "../../util/api";

const Container = styled.form`
display:flex;
flex-direction: column;
align-items: center;
gap:50px;
padding-top: 112px;
`;

const InputContainer = styled.div`
display:flex;
width: 720px; 
flex-direction: column;
gap:12px;
`;

const InputImageContainer = styled.div`
display: flex;
gap: 32px;
`;

const Title = styled.label`
font-size: 24px;
font-weight:700;
`;

function AddMessage() {
    const relationshipOptions = ['지인', '친구', '동료', '가족'];
    const fontOptions = ['Noto Sans', '폰트2'];

    const [profileItem, setProfileItem] = useState([]);
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleLoad = async () => {
        const { imageUrls } = await getProfileImage();
        setProfileItem(imageUrls);
    }

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <Section>
            <Container>
                <InputContainer>
                    <Title>From.</Title>
                    <NameInput placeholder="이름을 입력해주세요." onChange={handleNameChange} />
                </InputContainer>
                <InputContainer>
                    <Title>프로필 이미지</Title>
                    <InputImageContainer>
                        <ProfileImageList items={profileItem}></ProfileImageList>
                    </InputImageContainer>
                </InputContainer>
                <InputContainer>
                    <Title>상대와의 관계</Title>
                    <Select options={relationshipOptions} />
                </InputContainer>
                <InputContainer>
                    <Title>내용을 입력해 주세요</Title>
                    <ContentArea></ContentArea>
                </InputContainer>
                <InputContainer>
                    <Title>폰트 선택</Title>
                    <Select options={fontOptions} />
                </InputContainer>
                <button>생성하기</button>
            </Container >
        </Section>
    )
}

export default AddMessage;
