import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './routes/LayOut.tsx';
import HomePage from './pages/HomePage.tsx';
import ExercisePage from './pages/ExercisePage.tsx';
import CompletedPage from './pages/CompletedPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children:[
      {path:'/',element:<HomePage/>},
      {path:'/:exercise-type',element:<ExercisePage/>},
      {path:'/completed/:exercise-type',element:<CompletedPage/>},
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
