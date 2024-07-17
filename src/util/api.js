const BASE_URL = 'https://rolling-api.vercel.app/8-8';

export async function getProfileImage() {
  const response = await fetch(`${BASE_URL}/profile-images/`);
  const body = await response.json();
  return body;
}

export async function getUserMessage() {}

export async function getRecipients() {
  const response = await fetch(`${BASE_URL}/recipients`);
  const body = await response.json();
  return body.results;
}

export async function getRecipientMessage(recipientId) {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/message`);
  const body = await response.json();
  return body.results;
}
