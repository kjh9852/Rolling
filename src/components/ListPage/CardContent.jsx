import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRecipientProfileImages } from '../../util/api';

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RecipientName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
  color: var(--gray900);
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const MessageCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: var(--gray700);
  flex: none;
  order: 2;
  flex-grow: 0;
  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;

const ProfileImagesContainer = styled.div`
  display: flex;
  margin-top: 8px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: -8px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const ExtraProfiles = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8px;
  font-size: 12px;
  font-weight: bold;
`;

const CardContent = ({ recipientId, recipientName, messageCount }) => {
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
      <RecipientName>To. {recipientName}</RecipientName>
      <MessageCount>
        <span>{messageCount}</span>명이 작성했어요!
      </MessageCount>
      <ProfileImagesContainer>
        {profileImages.slice(0, 3).map((url, index) => (
          <img key={index} src={url} alt='Profile' />
        ))}
        {profileImages.length > 3 && (
          <ExtraProfiles>+{profileImages.length - 3}</ExtraProfiles>
        )}
      </ProfileImagesContainer>
    </CardContentContainer>
  );
};

export default CardContent;
