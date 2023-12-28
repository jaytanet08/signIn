import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter, // Import HashRouter
  RouterProvider
} from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';

// Create HashRouter instead of BrowserRouter
const router = createHashRouter([{
  path: "/",
  element: <Login />
},
{
  path: "/login",
  element: <Login />
},
{
  path: "/register",
  element: <Register />
},
{
  path: "/resetpassword",
  element: <ResetPassword />
},
{
  path: "/home",
  element: <Home />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
