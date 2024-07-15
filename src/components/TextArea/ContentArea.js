import styled from "styled-components";

const Content = styled.div`
width: 720px;
height: 260px;
`;

const ContentMenu = styled.div`
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
function ContentArea() {
    return (
        <Content>
            <ContentMenu>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>

            </ContentMenu>
            <ContentTextArea></ContentTextArea>
        </Content>
    )

}

export default ContentArea;