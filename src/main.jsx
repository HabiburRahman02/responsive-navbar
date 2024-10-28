import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Users from './components/Users/Users';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>Error mamma</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/users',
        element: <Users></Users>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
