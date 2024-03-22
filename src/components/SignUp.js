import React from 'react';
import { MdQuiz } from "react-icons/md";
import '../styles/SignUp.css';
import { Link } from 'react-router-dom' 

function SignUp() {
    const inputRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    return (
    <div className='main_signup'>

      <div className="logoDiv">
        <h1><MdQuiz className='icon' /><a className='q'>Quiz</a><a href="#" className='b'>Bee</a></h1>
      </div>

      <p className='heading1'>Please SignUp to your account</p>

      <div className='heading'> 
      <form id="login_form">
          <label> <input ref={inputRef} className="userid1" type="text"  placeholder='Username' /> </label> 
          <label> <input  ref={passwordRef} className="password1" type='text' placeholder='Password'/> </label> 
          <label> <input  ref={passwordRef} className="password2" type='text' placeholder='Confirm Password'/> </label> 
          <Link className='btn6' to={'/goquiz'} >SignUp</Link>
        </form>
      </div>

    </div>
  )
}

export default SignUp;
