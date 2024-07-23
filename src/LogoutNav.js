import React from 'react'
import img from './images/logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import './Logout.css'

export default function LogoutNav() {
    const navigate = useNavigate()
 
    return (
        <>
            <div className="logout">
                <div className="sign-in-logo" onClick={()=>{navigate('/movielist')}}>
                    <img src={img} alt="" />
                </div>
                <div className='inner-logout'>
                <div className=''>
                    <Button  variant='outlined' className='text-light border' onClick={()=>{navigate('/addtrailer')}}>ADD Trailer</Button>
                </div>
                <div className="sign-in-button">
                    <Button className='btn ps-3 pe-3 text-dark' onClick={() =>{ navigate('/')
                        localStorage.clear('getmail')
                     }}>Logout <LogoutIcon className='ms-3'/></Button>
                </div>
                </div>
            </div>

        </>
    )
}
