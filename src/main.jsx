import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Route'
import { RouterProvider } from 'react-router'
import BookProvider from './Context/BookContext'
import { ToastContainer } from 'react-toastify'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
    </BookProvider>
  </StrictMode>
)
