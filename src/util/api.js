const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '8-8';

export async function getProfileImage() {
  const response = await fetch(
    `https://rolling-api.vercel.app/profile-images/`
  );
  const body = await response.json();
  return body;
}

export async function getUserMessage({ id, offset }) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${id}/messages/?limit=5&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
  }
  const data = await response.json();
  return data;
}

export async function getRecipients() {
  const response = await fetch(`${BASE_URL}/${TEAM}/recipients/`);
  const body = await response.json();
  return body.results;
}

export async function getRecipientMessage(recipientId) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${recipientId}/messages/`
  );
  const body = await response.json();
  return body.results;
}

export async function PostRecipientMessage({ postId, name, image, relationShip, content, font }) {
  const response = await fetch(`${BASE_URL}/${TEAM}/recipients/${postId}/messages/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({
        team: '8-8',
        recipient_id: postId,
        sender: name,
        profileImageURL: image,
        relationship: relationShip,
        content: content,
        font: font,
      }),

    }
  );

  if (!response.ok) {
    throw new Error('데이터를 보내는데 오류가 발생했습니다.');
  }
  const body = await response.json();
  return body;
}

export async function RecipientMessageForm({
  name,
  backgroundColor,
  backgroundImageURL,
}) {
  const postData = {
    name,
    backgroundColor: backgroundColor || 'beige', // 기본값 설정
    backgroundImageURL: backgroundImageURL || null,
  };

  const response = await fetch(`${BASE_URL}/${TEAM}/recipients/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const errorReaction = await response.json();
    console.error('서버 응답 오류:', errorReaction);
    throw new Error(
      `데이터를 보내는 중 오류가 발생했습니다: ${JSON.stringify(errorReaction)}`
    );

  }
  const body = await response.json();
  return body;
}
