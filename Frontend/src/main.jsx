import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from "react-router";
import { AppRouter } from './router/AppRouter.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   
      <RouterProvider router={AppRouter}></RouterProvider>
      
  

  <Toaster></Toaster>
  </StrictMode>,
)
