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
      <Suspense>
        <PostDetail userData={recipientsData} />
      </Suspense>
      <Outlet />
    </>
  );
}

export async function loader({ params }) {
  const id = params.postId;
  const [userData, userReaction] = await Promise.all([
    fetch(`https://rolling-api.vercel.app/8-8/recipients/${id}/`),
    fetch(
      `https://rolling-api.vercel.app/8-8/recipients/${id}/reactions/?limit=8`
    ),
  ]);

  if (!userData.ok || !userReaction.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  const recipientsData = await userData.json();
  const reactionData = await userReaction.json();

  return { recipientsData, reactionData };
}
