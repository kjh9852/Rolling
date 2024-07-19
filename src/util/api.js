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


export async function PostRecipientMessage({ id, name, image, relationShip, content, font }) {
  const response = await fetch(`${BASE_URL}/${TEAM}/recipients/${id}/messages/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({
        team: '8-8',
        recipient_id: id,
        sender: name,
        profileImageURL: image,
        relationship: relationShip,
        content: content,
        font: font,
      }),

    });

  if (!response.ok) {
    throw new Error('데이터를 보내는데 오류가 발생했습니다.');
  }
  const body = await response.json();
  return body;
}