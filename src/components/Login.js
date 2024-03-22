import React from 'react';
import { MdQuiz } from "react-icons/md";import '../styles/LogIn.css';
import { Link } from 'react-router-dom' 

function Login() {
  const inputRef = React.useRef(null);
  const registrationRef = React.useRef(null);
  const mailRef = React.useRef(null);

    return (
    <div className='main_login'>

      <div className="logoDiv">
        <h1><MdQuiz className='icon' /><a className='q'>Quiz</a><a href="#" className='b'>Bee</a></h1>
      </div>

      <p className='heading1'>Please LogIn to your account</p>

      <div className='heading'> 
      <form id="form">
          <label> <input ref={inputRef} className="userid" type="text"  placeholder='Username' /> </label> 
          <label> <input ref={mailRef}  className="email" type='email' placeholder='Email Id'/> </label> 
          <label>
          <input ref={registrationRef}  className="registration" type='text' placeholder='Registration Number'/> </label> 
          <Link className='btn5' to={'/goquiz'} >LogIn</Link>
        </form>
      </div>

    </div>
  )
}

export default Login;
