import { Outlet } from 'react-router-dom';
import PostDetail from '../components/PostDetail/PostDetail';
import UserHeader from '../components/PostDetail/UserHeader';

export default function PostDetailPage() {
  return (
    <>
      <UserHeader />
      <PostDetail />
      <Outlet />
    </>
  );
}
