const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '8-8';
const HEADERS = { 'Content-Type': 'application/json' };

async function fetchAPI(props, options = {}) {
  const response = await fetch(`${BASE_URL}${props}`, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`요청실패: ${JSON.stringify(errorData)}`);
  }
  return response.json();
}

export async function getProfileImage() {
  return fetchAPI('/profile-images/');
}

export async function getUserMessage({ id, offset }) {
  return fetchAPI(
    `/${TEAM}/recipients/${id}/messages/?limit=5&offset=${offset}`
  );
}

export async function getRecipientMessage(recipientId) {
  const data = await fetchAPI(`/${TEAM}/recipients/${recipientId}/messages/`);
  return data.results;
}

export async function postRecipientMessage(postId, postData) {
  return fetchAPI(`/${TEAM}/recipients/${postId}/messages/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ team: TEAM, recipient_id: postId, ...postData }),
  });
}

// export async function PostRecipientMessage({
//   postId,
//   // name,
//   // image,
//   // relationShip,
//   // content,
//   // font,
//   postData,
// }) {
//   const response = await fetch(
//     `${BASE_URL}/${TEAM}/recipients/${postId}/messages/`,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         team: '8-8',
//         recipient_id: postId,
//         sender: postData.name,
//         profileImageURL: postData.image,
//         relationship: postData.relationShip,
//         content: postData.content,
//         font: postData.font,
//       }),
//     }
//   );

if (!response.ok) {
  throw new Error('데이터를 보내는데 오류가 발생했습니다.');
}
const body = await response.json();
return body;
}

export async function recipientMessageForm(formData) {
  const postData = {
    ...formData,
    backgroundColor: formData.backgroundColor || 'beige',
    backgroundImageURL: formData.backgroundImageURL || null,
  };

  return fetchAPI(`/${TEAM}/recipients/`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(postData),
  });
}



export async function deleteMessage(id) {
  return fetch(`${BASE_URL}/${TEAM}/messages/${id}/`, { method: 'DELETE' });
}

export async function deleteUser(id) {
  return fetch(`${BASE_URL}/${TEAM}/recipients/${id}/`, { method: 'DELETE' });
}

export async function fetchBackgroundImages() {
  try {
    const data = await fetchAPI('/background-images/');
    return {
      thumbnailUrls: data.imageUrls,
      originalUrls: data.imageUrls,
    };
  } catch (error) {
    console.error('배경 이미지 가져오기 오류:', error);
    return { thumbnailUrls: [], originalUrls: [] };
  }
}
