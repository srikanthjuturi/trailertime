import React from 'react'
import '../RegisterProcess.css'
import './Step2.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Stepfooter() {
    return (
        <div className='sign-process-footer'>
            <Typography className='Link'>Question ? Call 000-34-343-434-234-34</Typography>
            <div className="row mt-3">
                <div className=" col-md-3  col-6">
                    <div className='faq-sign-links'>
                        <Link className='Link'>FAQ</Link>
                    </div>
                    <div className='faq-sign-links mt-3'>
                        <Link className='Link'> Cookie Preferences</Link>
                    </div>
                    <div className='faq-sign-links mt-3'>
                        <select name="l" id="l">
                            <option value="eng">English</option>
                            <option value="hin">Hindi</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3  col-6">
                    <div className='faq-sign-links'>
                        <Link className='Link'>Help  Center</Link>
                    </div>
                    <div className='faq-sign-links mt-3'>
                        <Link className='Link'>Coperate Information</Link>
                    </div>
                </div>
                <div className=" col-md-3  col-6">
                    <div className='faq-sign-links'>
                        <Link className='Link'>Terms and Use</Link>
                    </div>
                </div>
                <div className=" col-md-3  col-6">
                    <div className='faq-sign-links'>
                        <Link className='Link'>Privacy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
