import styled from "styled-components";

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
gap: 5px;
`;

const ImageChoose = styled.img`
width: 56px;
height: 56px;
border-radius: 100px ;
`

function ProfileImageList({ items }) {
    return (
        <InputImageContainer>
            <img src={items[0]} alt="프로필 이미지" />
            <ImageContainer>
                <ImageLabel>프로필 이미지를 선택해주세요!</ImageLabel>
                <Images>
                    {items.map((profile, index) => (
                        <ImageChoose key={index} src={profile} />
                    ))
                    }
                </Images>
            </ImageContainer>
        </InputImageContainer>
    )
}

export default ProfileImageList;