import styled from "styled-components";

const Input = styled.input`
width: 720px;
height: 50px;
border: 1px solid var(--gray300);
border-radius: 8px;
padding: 12px 16px;
font-size:16px;
font-weight:400;
line-height:26px;
    `;

function NameInput({ placeholder, onChange }) {

    return (
        <Input id="name" name="name" type="text" placeholder={placeholder} onChange={onChange} />
    )

}

export default NameInput;