import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './router/RootLayout';
import UserLayout from './router/UserLayout';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import PostPage from './pages/PostPage';
import PostEditPage from './pages/PostEditPage';
import AddMessagePage from './pages/AddMessagePage';
import PostDetailPage from './pages/PostDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'post',
        element: <PostPage />,
      },
      {
        path: 'post/:id',
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <PostDetailPage />,
          },
          {
            path: 'post/:id/edit',
            element: <PostEditPage />,
          },
        ],
      },
      {
        path: 'post/:id/message',
        element: <AddMessagePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
