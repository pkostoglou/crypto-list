import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CoinList from '../pages/CoinList/CoinList';
import CoinDetails, {
    loader as coinLoader
} from '../pages/CoinDetails/CoinDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <CoinList/>,
    },
    {
      path: "/coin/:coinId",
      element: <CoinDetails/>,
      loader: coinLoader,
    },
  ]);

const RouterWrapper = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterWrapper
