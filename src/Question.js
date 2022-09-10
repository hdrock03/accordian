import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './App.css'

export default function Question({question}) {

    const [showInfo, setShowInfo] = useState(false)
  return (
    <div>
        <div className='SingleQuestion' key={question.id}>
            <div className='visible'>
            <p className='question'>{question.title}</p>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </div>
            <p className='info'>{ showInfo && question.info}</p>
        </div>
    </div>
  )
}

