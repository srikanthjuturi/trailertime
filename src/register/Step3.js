import React from 'react'
import '../RegisterProcess.css'
import './Step2.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import StepNav from './StepNav'
import Stepfooter from './Stepfooter'
import Aos from 'aos'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Step3() {
    Aos.init()
    const navigate = useNavigate()
    return (
        <>
            <StepNav />
            <div className="first-part">
                <div className="step2">
                    <div className='  step-3-content' data-aos='fade-left' data-aos-duration='1000'>
                        <div className='verification-btn text-center'><PublishedWithChangesIcon className='v' /></div>
                        <h6 className='mt-4 text-center'>Step <span className='fw-bold'>3</span> of <span className='fw-bold'> 4</span></h6>
                        <h2 className='fw-bold text-center'>Choose your plan.</h2>
                        <div className='mb-4 mt-4'><span className='me-2 text-danger'><TaskAltIcon/></span>No commitments, cancel anytime.</div>
                        <div className='mb-4'><span className='me-2 text-danger'><TaskAltIcon /></span>Everything on Netflix for one low price.             </div>
                        <div className='mb-4'><span className='me-2 text-danger'><TaskAltIcon /></span>No ads and no extra fees. Ever.</div>
                        <Button variant='contained' className='bg-danger mb-5 step-3-next-btn' onClick={() => { navigate('/registerprocess/step4') }} >NeXT</Button>
                    </div>
                </div>
            </div>
            <Stepfooter />
        </>
    )
}
