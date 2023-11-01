
import Root from '../Root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home'
import ProductsDisplay from '../Pages/ProductsDisplay/ProductsDisplay';

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
          path:'/productsDisplay',
          element:<ProductsDisplay></ProductsDisplay>,
          loader:()=>fetch('http://localhost:5000/products')
        },
       
      ]
    },
  ]);

  export default router;