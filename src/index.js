import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import View from './pages/View';
import Edit from './components/Edit';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/add",
    element:<Add/>
  },
  {
    path: "/view",
    element:<View/>
  },
  {
    path: "/edi/:id",
    element:<Edit/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
