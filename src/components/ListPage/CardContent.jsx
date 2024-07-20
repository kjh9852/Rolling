import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRecipientProfileImages } from '../../util/api';

const CardContentContainer = styled.div`
  display: flex;
  margin-bottom: 43px;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 4;
  @media (max-width: 768px) {
    margin-bottom: 33px;
  }
`;

const RecipientName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: ${({ $hasBackgroundImage }) =>
    $hasBackgroundImage ? 'var(--white)' : 'var(--gray900)'};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const MessageCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: ${({ $hasBackgroundImage }) =>
    $hasBackgroundImage ? 'var(--gray200)' : 'var(--gray700)'};
  flex: none;
  order: 2;
  flex-grow: 0;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.01em;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.005em;
    }
  }
`;

const ProfileImagesContainer = styled.div`
  display: flex;
  height: 28px;
  div {
    width: 28px;
    height: 28px;
    background: var(--white);
    border: 1.5px solid var(--white);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px -6px;

    &:first-child {
      margin-left: 0;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
`;

const ExtraProfiles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 6px;
  background: var(--white);
  border-radius: 30px;
  flex: none;
  order: 3;
  flex-grow: 0;

  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.005em;
  color: var(--gray500);
`;

const CardContent = ({
  recipientId,
  recipientName,
  messageCount,
  backgroundImageURL,
}) => {
  const [profileImages, setProfileImages] = useState([]);

  useEffect(() => {
    const fetchProfileImages = async () => {
      const images = await getRecipientProfileImages(recipientId);
      setProfileImages(images);
    };

    fetchProfileImages();
  }, [recipientId]);

  return (
    <CardContentContainer>
      <RecipientName $hasBackgroundImage={!!backgroundImageURL}>
        To. {recipientName}
      </RecipientName>
      <MessageCount $hasBackgroundImage={!!backgroundImageURL}>
        <span>{messageCount}</span>명이 작성했어요!
      </MessageCount>
      <ProfileImagesContainer>
        {profileImages.slice(0, 3).map((url, index) => (
          <div key={index}>
            <img src={url} alt='Profile' />
          </div>
        ))}
        {profileImages.length > 3 && (
          <ExtraProfiles>+{profileImages.length - 3}</ExtraProfiles>
        )}
      </ProfileImagesContainer>
    </CardContentContainer>
  );
};

export default CardContent;
