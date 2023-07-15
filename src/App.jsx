import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  RootPage,
  HomePage,
  PhonePage,
  Test,
  ProductListPage,
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
        path: 'search/category-mobile-phone',
        element: <PhonePage />,
      },
      {
        path: 'product-list',
        element: <ProductListPage />,
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
