import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  RootPage,
  HomePage,
  PhonePage,
  Test,
  SearchPage,
  IntroduceProductPage,
  LoginPage,
  CartPage,
} from './pages';
import ErrorPage from './pages/Error';
import { loader as productsLoader } from './pages/IntroduceProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'phones',
        element: <PhonePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'search/:productId',
        element: <IntroduceProductPage />,
        loader: productsLoader,
      },
      {
        path: 'checkout/cart',
        element: <CartPage />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
