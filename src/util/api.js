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

// getRecipients 함수: 데이터를 가져오고 정렬하는 함수
// - 기본적으로 createdAt을 기준으로 정렬
// - sortBy 매개변수에 따라 messageCount를 기준으로 정렬 가능
export async function getRecipients(
  offset = 0,
  limit = 1000,
  sortBy = 'createdAt'
) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/?offset=${offset}&limit=${limit}`
  );
  const body = await response.json();

  if (sortBy === 'messageCount') {
    body.results.sort(
      (a, b) =>
        b.messageCount - a.messageCount ||
        b.reactionCount - a.reactionCount ||
        new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else {
    body.results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return body;
}

export async function getRecipientMessage(recipientId) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${recipientId}/messages/`
  );
  const body = await response.json();
  return body.results;
}

<<<<<<< HEAD
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

=======
>>>>>>> a1c4ebef802645b4e75e49f529f0d069b0ad057b
export async function PostRecipientMessage({
  postId,
  name,
  image,
  relationShip,
  content,
  font,
}) {
  const response = await fetch(
    `${BASE_URL}/${TEAM}/recipients/${postId}/messages/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

export async function deleteMessage(id) {
  const response = await fetch(`${BASE_URL}/${TEAM}/messages/${id}/`, {
    method: 'DELETE',
  });
  return response;
}

export async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/${TEAM}/recipients/${id}/`, {
    method: 'DELETE',
  });
  return response;
}
