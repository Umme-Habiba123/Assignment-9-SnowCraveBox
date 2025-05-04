import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        index:true
      },
      {
          path:'/about',
          Component:About
      },
      {
          path:'/shop',
          Component:Shop
      },
      {
          path:'/contact',
          Component:Contact
      }
    ]
    
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
