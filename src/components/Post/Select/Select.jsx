import styled from 'styled-components';
import arrowTop from '../../../assets/image/arrow_top.png';
import arrowDown from '../../../assets/image/arrow_down.png';
import { useState } from 'react';

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 50px;
  border: 1px solid var(--gray300);
  padding: 12px 16px;
  border-radius: 8px;
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
  overflow: hidden;
  margin-top: 95px;
  width: 318px;
  border: 1px solid var(--gray300);
  border-radius: 8px;
  background-color: var(--white);
  z-index: 1;
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

function Select({ options, type, onFontSelect, onRelationShipSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleOptions = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (type === 'relationship') {
      onRelationShipSelect(option);
    } else if (type === 'font') {
      onFontSelect(option);
    }
  };

  return (
    <>
      <SelectWrapper onClick={toggleOptions}>
        <Selected>{selectedOption}</Selected>
        <Image src={isOpen ? arrowTop : arrowDown} />
      </SelectWrapper>

      {isOpen && (
        <Options>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Options>
      )}
    </>
  );
}

export default Select;
