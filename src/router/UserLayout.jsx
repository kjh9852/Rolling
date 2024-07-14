import { Outlet } from 'react-router-dom';
import UserHeader from '../components/post/UserHeader';

export default function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}
