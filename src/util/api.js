const BASE_URL = 'https://rolling-api.vercel.app';

export async function getProfileImage() {
  const response = await fetch(`${BASE_URL}/profile-images/`);
  const body = await response.json();
  return body;
}

export async function getUserMessage() {}
