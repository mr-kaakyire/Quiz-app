import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './routes/LayOut.tsx';
import HomePage from './HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
      {path:'/',element:<HomePage/>},
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
