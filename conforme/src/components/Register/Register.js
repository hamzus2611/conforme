import React from 'react';
import './Register.css';
import Form from './Form';
import { BrowserRouter as Switch, Navigate } from "react-router-dom";

function Register() {
  const token = localStorage.getItem("token");

  return (
    <div>

      {token ? (
        <Navigate to="/audit" />
      ) : (<Form />)

      }
    </div>
  )
}
export default Register;