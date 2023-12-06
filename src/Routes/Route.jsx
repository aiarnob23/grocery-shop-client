
import Root from '../Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home'
import ProductsDisplay from '../Pages/ProductsDisplay/ProductsDisplay';
import ProductsByCategory from '../Pages/ProductsByCategory/ProductsByCategory';
import Login from '../Pages/Login/Login';

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
       
      ]
    },
  ]);

  export default router;