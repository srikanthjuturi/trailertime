import React from 'react'
import '../RegisterProcess.css'
import './Step2.css'
import img from '../images/logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'


export default function StepNav() {
    const navigate = useNavigate()
 
    return (
        <>
            <div className="sign-in-nav">
                <div className="sign-in-logo" style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>
                    <img src={img} alt="" />
                </div>
                <div className="sign-in-button">
                    <Button className='btn ps-3 pe-3 text-dark' onClick={() =>{ navigate('/registration') }}>Sign In</Button>
                </div>
            </div>

        </>
    )
}
