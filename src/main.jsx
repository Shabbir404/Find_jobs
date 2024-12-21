import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import applied_jobs from './components/Applied_Jobs/applied_jobs';
import Statistics from './components/Statistics/Statistics.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Errors from './components/Error/Errors.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errors></Errors>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <applied_jobs></applied_jobs>
      },
      {
        path: '/Satistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/alljobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
