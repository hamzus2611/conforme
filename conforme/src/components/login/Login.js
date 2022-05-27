import React from 'react'
import Log from './Log'
import './Log.css'
import { BrowserRouter as Switch, Navigate } from "react-router-dom";

function Login() {
  const token = localStorage.getItem("token");

  return (
    <div>

      {token ? (
        <Navigate to="/audit" />
      ) : (<Log />)

      }
    </div>
  )
}
export default Login