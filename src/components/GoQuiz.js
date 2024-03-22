import React, { useEffect, useState } from 'react'
import '../styles/Quiz.css'
import { MdQuiz } from "react-icons/md";
import { Link } from 'react-router-dom' 



export default function Quiz() {

  return (
<section className='home' id='quiz'>

<div className="menu1">
  <div className="menu2">
    <input type="checkbox" id="toggle" />
    <label id="show-menu" htmlFor="toggle">
    <svg class="line" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <g
          fill="none"
          stroke="#000"
          stroke-width="7.999"
          stroke-linecap="round"
        >
          <path d="M 55,26.000284 L 24.056276,25.999716" />
          <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
          <path d="M 45,73.999716 L 75.943724,74.000284" />
          <path d="M 75.943724,26.000284 L 45,25.999716" />
          <path d="M 24.056276,73.999716 L 55,74.000284" />
        </g>
      </svg>
    <div className="btn4">
    <i className="material-icons md-36"><button className='btn2'><Link to={'/question'}>Quiz</Link></button></i>    
    {/* </div>
    <div class="btn4"> */}
    <i className="material-icon md-36"><button className='btn2' ><Link to={'/menu'} >Menu</Link></button></i>
    {/* </div>
    <div className="btn4"> */}
    <i className="material-icons md-36"><button className='btn2'><Link to={'/result'}>Result</Link></button></i>
    </div>
  </label>
  </div>
</div>
     
        <div className='head'>
          <h1><MdQuiz className='icon' /><a className='title'>Quiz</a><a href="#" className='be'>Bee</a></h1>
        </div>

    <div className='box'>
       <ol className='lists'>
            <h1>Instruction to be followed:-</h1>
            <li> 1. You will be asked 10 questions one after another.</li>
            <li>2. 10 points is awarded for the correct answer.</li>
            <li>3. Each question has three options. You can choose only one options.</li>
            <li>4. You can review and change answers before the quiz finish.</li>
            <li>5. The result will be declared at the end of the quiz.</li>
        </ol>
                
         <div className='start_btn'>
         <button className='btn3 next'><Link to={'/question'}>Start Quiz</Link></button>
         </div>
    </div>
    </section>
  )
}