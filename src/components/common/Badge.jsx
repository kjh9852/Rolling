import styled from 'styled-components';

const Badge = styled.span`
  padding: 2px 8px;
  border-radius: 4px;
  background: ${({ $findRelationShip }) =>
    $findRelationShip && `var(${$findRelationShip.background})`};
  color: ${({ $findRelationShip }) =>
    $findRelationShip && `var(${$findRelationShip.color})`};
  font-size: 1.4rem;
`;

export default Badge;
