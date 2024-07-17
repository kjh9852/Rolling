import { Outlet } from 'react-router-dom';
import UserHeader from '../components/PostDetail/UserHeader';

export default function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}
