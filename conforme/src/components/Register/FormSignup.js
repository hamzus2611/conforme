import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {useDispatch} from 'react-redux'
import { useState } from 'react';
import { register } from '../../redux/Action/AuthAction';

const FormSignup = ({ submitForm }) => {
  const dispatch= useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [UserName, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleregister = (e) => {
    e.preventDefault();
    dispatch(register({ UserName,Email, Password }));
  };
  return (
    <div className='form-content-right'>
      <form onSubmit={handleregister} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            onChange={(e)=>setUsername(e.target.value)}
          />
        
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}
          />
         
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            
            onChange={(e)=>setPassword(e.target.value)}
          />
     
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;