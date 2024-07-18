import { useRouteLoaderData, defer, Await, Outlet } from 'react-router-dom';
import UserHeader from '../components/PostDetail/UserHeader';
import { Suspense } from 'react';

export default function UserLayout() {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
}
