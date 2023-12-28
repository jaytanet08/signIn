import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
// import ProtechtedRouter from './auth/ProtechtedRouter';


const router = createBrowserRouter([{
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
// {
//   path: "/home",
//   element: <ProtechtedRouter><Home /></ProtechtedRouter>
// }
{
  path: "/home",
  element: <Home />
}


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
