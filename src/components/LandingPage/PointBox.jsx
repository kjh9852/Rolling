import styled from 'styled-components';

const PointBox = styled.div`
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--purple600);
  border-radius: 50px;
  font-size: 14px;
  color: var(--white);
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 20px;
  position: absolute;
  top: -48px;

  @media (max-width: 768px) {
    padding: 4px 12px;
    top: -44px;
  }
`;

export default PointBox;
