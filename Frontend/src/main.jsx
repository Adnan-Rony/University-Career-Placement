import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router";
import { AppRouter } from './router/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRouter>
      <Toaster></Toaster>
    </AppRouter>
  </BrowserRouter>
  </StrictMode>,
)
