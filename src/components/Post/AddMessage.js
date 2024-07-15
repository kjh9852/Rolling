import { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "../Select/Select";
import Section from "../common/Section";
import NameInput from "../Input/NameInput";
import ContentArea from "../TextArea/ContentArea";
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

const ImageContainer = styled.div`
display: flex;
flex-direction: column;
gap:12px;
`;

const ImageLabel = styled.label`
font-size: 16px;
font-weight: 400;
color: var(--gray500);
`;

const Images = styled.div`
display: flex;
`;

const Title = styled.label`
font-size: 24px;
font-weight:700;
`;

function AddMessage() {
    const relationshipOptions = ['지인', '친구', '동료', '가족'];
    const fontOptions = ['Noto Sans', '폰트2'];

    const [profileItem, setProfileItem] = useState([]);

    const handleLoad = async () => {
        const { imageUrls } = await getProfileImage();
        setProfileItem(imageUrls);
    }

    useEffect(() => {
        handleLoad();
    }, []);

    useEffect(() => {
        console.log(profileItem);
    }, [profileItem])

    return (
        <Section>
            <Container>
                <InputContainer>
                    <Title>From.</Title>
                    <NameInput placeholder="이름을 입력해주세요."></NameInput>
                </InputContainer>
                <InputContainer>
                    <Title>프로필 이미지</Title>
                    <InputImageContainer>
                        <img src={profileItem[0]} alt="프로필 이미지" />
                        <ImageContainer>
                            <ImageLabel>프로필 이미지를 선택해주세요!</ImageLabel>
                            <Images>
                                {profileItem.map((profile, index) => (
                                    <img key={index} src={profile} />
                                ))
                                }
                            </Images>
                        </ImageContainer>
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