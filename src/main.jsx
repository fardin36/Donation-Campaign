import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/error-page/ErrorPage'
import MainBody from './components/main-body/MainBody'
import Home from './components/home/Home'
import Donation from './components/donation/Donation'
import Details from './components/details/Details'
import Statistics from './components/statistics/Statistics'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`../data.json`)
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch(`../data.json`)
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch(`../data.json`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
