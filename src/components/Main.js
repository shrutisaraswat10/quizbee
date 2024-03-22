import React, { useRef } from 'react'
import video from '../components/video.mp4'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'
import { MdQuiz } from "react-icons/md";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



export default function Main() {


  return (
    <section className='main_home' >

      <video src={video} muted autoPlay loop type="video.mp4.mp4"></video>

<div className='shape'>
 <div className="menu">
  <input type="checkbox" id="toggle" />
  <label id="show-menu" htmlFor="toggle">
      <i className="logoDiv"><h1><MdQuiz className='icon' /><a className='q'>Quiz</a><a href="#" className='b'>Bee</a></h1></i>
    <div className="btn">
      <i className="material-icons md-36"><button className='btn2'><Link to={'/menu'}>About</Link></button></i>
    </div>
    <div className="btn">
      <i className="material-icons md-36"><button className='btn2'><Link to={'/goquiz'}>Quiz</Link></button></i>
    </div>
    <div className="btn">
      <i className="material-icons md-36"><button className='btn2'><Link to={'/result'}>Result</Link></button></i>
    </div>
  </label>
</div>
</div>

<div className='container'>
   <ol className='list'> 
  <h3><li>Welcome back <p>Please Login/SignUp to your account</p></li></h3>
  </ol>

    <div className='start'>
        <Link className='btn1' to={'login'} >Login</Link>
        <Link className='btn1' to={'signUp'} >SignUp</Link>
    </div> 
</div>
   </section>
  )
}