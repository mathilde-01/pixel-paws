import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app.jsx'
import './styles/style.css'
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import PetCreationPage from './pages/PetCreationPage'
import LandingPage from './pages/LandingPage';
import DisplayPage from './pages/DisplayPage';
import NoMatch from './pages/NoMatch';
import Logout from './components/Logout.jsx'
import ErrorPage from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: '/login',
        element: <LoginPage />
      }, {
        path: '/signup',
        element: <SignUpPage />
      }, {
        path: '/petCreation',
        element: <PetCreationPage />
      }, {
        path: '/Display',
        element: <DisplayPage />
      }, {
        path: '/logout',
        element: < Logout />,
      }, {
        path: '*',
        element: <ErrorPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
