import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Router setup
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { isAuthenticated } from './auth.js'

function Protected({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return children
}

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/signup" replace /> },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: (
      <Protected>
        <Dashboard />
      </Protected>
    )
  },
  // Keep old single-page UI as fallback at /demo
  { path: '/demo', element: <App /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
