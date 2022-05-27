import React, { useState } from 'react';
import './Log.css';
import FormLogin from './FormLogin';
import LogSucces from './LogSucces';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/svg-7.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <LogSucces />
        )}
      </div>
    </>
  );
};

export default Form;