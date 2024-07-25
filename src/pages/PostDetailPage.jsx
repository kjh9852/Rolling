import { Suspense } from 'react';
import { useLoaderData, Outlet } from 'react-router-dom';
import { getUser, getReactions } from '../util/api';
import LoadingSpinner from '../ui/LoadingSpinner';
import PostDetail from '../components/PostDetail/PostDetail';
import UserHeader from '../components/PostDetail/UserHeader';

export default function PostDetailPage() {
  const { userData, userReaction } = useLoaderData();
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <UserHeader userData={userData} userReaction={userReaction} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PostDetail userData={userData} />
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
  try {
    const [userData, userReaction] = await Promise.all([
      getUser({ id }),
      getReactions({ id, limit }),
    ]);
    return { userData, userReaction };
  } catch (error) {
    console.log(error);
  }
}
