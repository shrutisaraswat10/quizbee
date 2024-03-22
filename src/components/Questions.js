import React, { useEffect, useState } from 'react'
import '../styles/Questions.css'
import { MdQuiz } from "react-icons/md";

export default function Quiz() {


  return (
    <>
    <div className='contain'>
         <h1><MdQuiz className='icon' /><a className='quiz'>Quiz</a><a href="#" className='be'>Bee</a></h1>
   </div>

        
  </>
  )
}