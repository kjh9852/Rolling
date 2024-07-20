import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './assets/style/GlobalStyle';
import RootLayout from './router/RootLayout';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import AddPostPage from './pages/AddPostPage';
import PostEditPage from './pages/PostEditPage';
import AddMessagePage from './pages/AddMessagePage';
import NotFoundPage from './components/PostPage/NotFoundPage';
import PostDetailPage, {
  loader as loaderUserData,
} from './pages/PostDetailPage';
import MessageDetailPage, {
  loader as messageDetailLoader,
} from './pages/MessageDetailPage';

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
        element: <AddPostPage />,
      },
      {
        path: 'post/:postId',
        element: <PostDetailPage />,
        loader: loaderUserData,
        children: [
          {
            path: 'edit',
            element: <PostEditPage />,
          },
          {
            path: 'message/:messageId',
            element: <MessageDetailPage />,
            loader: messageDetailLoader,
          },
        ],
      },
      {
        path: 'post/:postId/message',
        element: <AddMessagePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
