import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routeTree'
// main.tsx ou index.tsx
import './index.css' // ou './globals.css', etc
import { AuthProvider } from './features/services/authProvider/authProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)
