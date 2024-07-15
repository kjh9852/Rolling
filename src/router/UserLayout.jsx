import { Outlet } from 'react-router-dom';
import UserHeader from '../components/Post/UserHeader';

export default function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}
