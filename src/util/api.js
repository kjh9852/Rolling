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

export async function getRecipients(offset = 0, limit = 8) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/?offset=${offset}&limit=${limit}`
  );
  const body = await response.json();
  return body;
}

export async function getRecipientMessage(recipientId) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${recipientId}/messages/`
  );
  const body = await response.json();
  return body.results;
}

// 새롭게 추가된 함수: 각 수신자의 메시지 프로필 이미지를 가져오는 함수
export async function getRecipientProfileImages(recipientId) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${recipientId}/messages/`
  );
  if (!response.ok) {
    throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
  }
  const body = await response.json();
  const profileImages = body.results.map((message) => message.profileImageURL);
  return profileImages;
}
