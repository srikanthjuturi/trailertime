import React, { useState } from 'react'
import '../RegisterProcess.css'
import './Step2.css'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import StepNav from './StepNav'
import Stepfooter from './Stepfooter'
import Aos from 'aos'
import VerifiedIcon from '@mui/icons-material/Verified';
export default function Step2() {
    Aos.init()
    const navigate = useNavigate()
   
    const mail = localStorage.getItem('getmail')
    console.log(mail)
    return (
        <>
            <StepNav />
            <div className="first-part">
                <div className="step2">
                    <div className='step2-inner' data-aos='fade-left' data-aos-duration='1000'>
                        <div className='verification-btn'><VerifiedIcon className='v' /></div>
                        <h6>Step <span className='fw-bold'>2</span> of <span className='fw-bold'> 4</span></h6>
                        <h2 className='fw-bold'>Great, now let us verify your <br /><span className='text-center' style={{ display: 'block' }}>email</span ></h2>
                        <h5>Click the link we sent to <span className='fw-bold fs-6' >{mail}  </span> to verify.</h5>
                        <Typography variant='body' className='mt-3'>Verifying your email will improve account security and help you receive important Netflix communications. </Typography>
                        <input type="email" name="email" className='form-control mt-3 ' placeholder='Email'  />
                        <input type="password" name="passwords" className='form-control mt-3 mb-3 ' placeholder='Add a Password' />
                        <Button variant='contained' className='bg-secondary mb-5' onClick={() => { navigate('/registerprocess/step3') }} >skip</Button>
                    </div>
                </div>
            </div>
            <Stepfooter />
        </>
    )
}
