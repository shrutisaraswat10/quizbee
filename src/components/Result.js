import React, { useEffect } from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { MdQuiz } from "react-icons/md";


export default function Result() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const totalPoints = queue.length ; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 0)
    const flag = flagResult(totalPoints, earnPoints)

    
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <section className='home' id='Res'>
        <div className='head'>
          <h1><MdQuiz className='icon' /><a className='title'>Quiz</a><a href="#" className='be'>Bee</a></h1>
        </div>

      <div className='contain'>
        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>{userId || ""}</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                <span className='bold'>{attempts || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "green" : "red" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn2' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="contain">
            <ResultTable></ResultTable>
        </div>
    </div>
  </section>
  )
}
