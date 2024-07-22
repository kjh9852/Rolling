import { Suspense } from 'react';
import { useLoaderData, Outlet } from 'react-router-dom';
import PostDetail from '../components/PostDetail/PostDetail';
import UserHeader from '../components/PostDetail/UserHeader';

export default function PostDetailPage() {
  const { recipientsData, reactionData } = useLoaderData();
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <UserHeader userData={recipientsData} userReaction={reactionData} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PostDetail userData={recipientsData} />
      </Suspense>
      <Outlet />
    </>
  );
}

export async function loader({ params }) {
  const id = params.postId;
  let limit = 8;
  if (window.innerWidth <= 1248) {
    limit = 6;
  }
  const [userData, userReaction] = await Promise.all([
    fetch(`https://rolling-api.vercel.app/8-8/recipients/${id}/`),
    fetch(
      `https://rolling-api.vercel.app/8-8/recipients/${id}/reactions/?limit=${limit}`
    ),
  ]);

  if (!userData.ok || !userReaction.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  const recipientsData = await userData.json();
  const reactionData = await userReaction.json();

  return { recipientsData, reactionData };
}
