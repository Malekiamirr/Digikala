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
  ErrorPage,
  SuperMarketPage,
  IncredibleOfferPage,
  BestSellingPage,
  PromotionCenterPage,
  MainCategoryPage,
  DynamicProductListPage,
  FavoriteListPage,
} from './pages';
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
        path: 'main/food-beverage',
        element: <SuperMarketPage />,
      },
      {
        path: 'incredible-offers',
        element: <IncredibleOfferPage />,
      },
      {
        path: 'best-selling',
        element: <BestSellingPage />,
      },
      {
        path: 'promotion-center',
        element: <PromotionCenterPage />,
      },
      {
        path: 'main/mobile-phone',
        element: <PhonePage />,
      },
      {
        path: 'search',
        element: <ProductListPage />,
        loader: productsLoader,
      },
      {
        path: 'search/:searchId',
        element: <DynamicProductListPage />,
        loader: productsLoader,
      },
      {
        path: 'product/:productId',
        element: <IntroduceProductPage />,
        loader: productsLoader,
      },
      {
        path: 'checkout/cart',
        element: <CartPage />,
      },
      {
        path: 'profile/lists',
        element: <FavoriteListPage />,
      },
      {
        path: 'main/:mainId',
        element: <MainCategoryPage />,
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
