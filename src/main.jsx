import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Errorpage from './Components/ErrorPage/Errorpage.jsx';
import Jobdetails from './Components/Jobdetails/Jobdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/applied-jobs",
        element: <Appliedjobs></Appliedjobs>,
        loader: ()=>fetch('../jobs.json')
      },
      {
        path:"/job/:id",
        element:<Jobdetails></Jobdetails>,
        loader: ()=>fetch('../jobs.json')
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
