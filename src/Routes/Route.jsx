
import Root from '../Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home'
import ProductsDisplay from '../Pages/ProductsDisplay/ProductsDisplay';
import ProductsByCategory from '../Pages/ProductsByCategory/ProductsByCategory';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Cart from '../Pages/Cart/Cart';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/ProductsByCategory',
          element:<ProductsByCategory></ProductsByCategory>,
        },
        {
          path:'/productsDisplay',
          element:<ProductsDisplay></ProductsDisplay>,
        },
       
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/Register',
          element:<Register></Register>,
        },
        {
          path:'/Cart',
          element:<PrivateRoute><Cart></Cart></PrivateRoute>,
        },
       
      ]
    },
  ]);

  export default router;