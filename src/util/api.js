const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '8-8';

export async function getProfileImage() {
  const response = await fetch(
    `https://rolling-api.vercel.app/profile-images/`
  );
  const body = await response.json();
  return body;
}

export async function getUserMessage(id, limit = 5) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${id}/messages/?limit=${limit}`
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
