import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout';
import Register from './pages/Register';
import Login from './pages/Login';


export const myBrowser = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,  
    children:[
      {
        path:"/register",
        element:<Register></Register>
      },

      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  }

])

