import styled from "styled-components";
import arrowTop from "../../assets/image/arrow_top.png"
import arrowDown from "../../assets/image/arrow_down.png";
import { useState } from "react";

function Select() {

    const Select = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    height: 50px;
    border: 1px solid var(--gray300);
    padding: 12px 16px;
    border-radius: 8px;
    box-sizing: border-box;
`;

    const Image = styled.img`
    width: 16px;
    height: 16px;
`;

    const Selected = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 400;

`;

    const Options = styled.ul`
    position: absolute;
    margin-top: 95px;
    width: 318px;
    border: 1px solid var(--gray300);
    border-radius: 8px;
    background-color: var(--white);

`;

    const Option = styled.li`
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    
    &:hover {
        background-color: var(--gray100);
        cursor: pointer;
    }
`;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("aa");


    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <>
            <Select onClick={toggleOptions}>
                <Selected>{selectedOption}</Selected>
                <Image src={isOpen ? arrowTop : arrowDown}></Image>
            </Select>

            {isOpen && <Options>
                <Option onClick={() => handleOptionClick("1")}>1</Option>
                <Option onClick={() => handleOptionClick("2")}>2</Option>
                <Option onClick={() => handleOptionClick("3")}>3</Option>
            </Options>
            }
        </>
    )

}


export default Select;