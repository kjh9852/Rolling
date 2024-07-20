import React from 'react';
import styled from 'styled-components';

const CardListWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
`;

const CardList = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $currentOffset }) =>
    `translateX(-${$currentOffset * 1180}px)`};
`;

const AnimatedCardList = ({ cards, currentOffset }) => {
  return (
    <CardListWrapper>
      <CardList $currentOffset={currentOffset}>{cards}</CardList>
    </CardListWrapper>
  );
};

export default AnimatedCardList;
