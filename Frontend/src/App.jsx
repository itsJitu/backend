import { useState } from 'react'


import SigIn from './Component/sigIn';
import LogIn from './Component/logIn';
import First from './Component/First';
import dashboard from './Component/dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,

    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path:'/sigin',
        element: <SigIn />
      },
      {
        path: '/dashboard',
        element: <dashboard />
      },
      {
        path: '/login',
        element: <LogIn />
      },
    ]
  }
])

function App() {
   
  return <RouterProvider router={router} />

}

export default App
