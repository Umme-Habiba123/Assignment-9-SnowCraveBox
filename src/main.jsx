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
import Cart from './Pages/Cart.jsx';
import HowItWorks from './Components/HowItWorks.jsx';
import CountUpSection from './Components/CountUpSection.jsx';
import MyDetails from './Pages/MyDetails.jsx';
import Slider from './Components/Slider.jsx';
import HomeLayout from './Layouts.jsx/HomeLayout.jsx';

import SubscribeItem from './Pages/SubscribeItem.jsx';
import BoxCardDetails from './Pages/BoxCardDetails.jsx';
import RatingReview from './Components/ReviewSection.jsx';
import ReviewSection from './Components/ReviewSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        index:true,
        Component:HomeLayout
      },
      {
        path:'/slider',
        Component: Slider
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
      },
      {
        path:'/cart',
        Component:Cart
      },
      {
        path: '/howitworks',
        Component:HowItWorks
      },
      {
        path:'/countupsection',
        Component:CountUpSection
      },
      {
        path:'/mydetails',
        Component:MyDetails
      },
      {
        path:'/subscribe/:id',
        Component:SubscribeItem
      },
      {
        path:'/boxcarddetails/:id',
        Component:BoxCardDetails,
        loader:()=>fetch('/catDog.json')
      },
      {
        path:'/reviewsection',
        Component:ReviewSection
      }
    ]
    
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
