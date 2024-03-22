import React, { useEffect, useState } from 'react'
import '../styles/Result.css'

export default function ResultTable() {


  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
        </table>
    </div>
  )
}