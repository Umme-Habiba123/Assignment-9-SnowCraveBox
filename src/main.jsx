import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import Contact from './Pages/Contact.jsx';

import HowItWorks from './Components/HowItWorks.jsx';
import CountUpSection from './Components/CountUpSection.jsx';
import MyDetails from './Pages/MyDetails.jsx';
import Slider from './Components/Slider.jsx';
import HomeLayout from './Layouts.jsx/HomeLayout.jsx';

import SubscribeItem from './Pages/SubscribeItem.jsx';
import BoxCardDetails from './Pages/BoxCardDetails.jsx';

import ReviewSection from './Components/ReviewSection.jsx';
import MyProfile from './Components/MyProfile.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Blog from './Pages/Blog.jsx';
import PrivateRoute from './AuthProvider/PrivateRoute.jsx';
import ForgetPassword from './Pages/ForgetPassword.jsx';
import ResetPassword from './Pages/ResetPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement:<span className="loading loading-ring loading-xl"></span>,
    children: [
      {
        path: '/',
        index: true,
        Component: HomeLayout
      },
      {
        path: '/slider',
        Component: Slider
      },
      {
        path: '/blog',
        element:<PrivateRoute>
          <Blog></Blog>
        </PrivateRoute>
      },
      {
        path: '/contact',
        element:<PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
      },

      {
        path: '/howitworks',
        Component: HowItWorks
      },
      {
        path: '/countupsection',
        Component: CountUpSection
      },
      {
        path: '/mydetails',
        Component: MyDetails
      },
      {
        path: '/subscribe/:id',
        Component: SubscribeItem
      },
      {
        path: '/boxcarddetails/:id',
        element: <PrivateRoute>
          <BoxCardDetails></BoxCardDetails>
        </PrivateRoute>,
        loader: () => fetch('/catDog.json')
      },
      {
        path: '/reviewsection',
        Component: ReviewSection
      },
      {
        path: '/myprofile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path:'/forgetpassword',
        Component:ForgetPassword
      },
      {
        path:'/resetpassword',
        Component:ResetPassword
      }
    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
