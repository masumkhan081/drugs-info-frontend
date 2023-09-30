import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { routes } from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />,
)
