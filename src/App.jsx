import React from 'react';
import  { Toaster } from 'react-hot-toast';
import { RouterProvider} from 'react-router-dom';
import {myBrowser} from './Router'

const App = () => {
  return (
    <div>
      <Toaster></Toaster>

        <RouterProvider router={myBrowser}></RouterProvider>
        
    </div>
  )
}

export default App