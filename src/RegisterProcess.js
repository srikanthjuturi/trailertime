import React,{useState} from 'react'
import './RegisterProcess.css'
import img from './images/logo.png'
import img1 from './images/responsiveview.png'
import {Typography} from '@mui/material'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export default function RegisterProcess() {
   const  navigate = useNavigate()
  return (
    <>
        <div className="sign-in-nav">
            <div className="sign-in-logo" style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>
                <img src={img} alt="" />
            </div>
            <div className="sign-in-button">
                  <Button className='btn ps-3 pe-3 text-dark' onClick={()=>{navigate('/registration')}}>Sign In</Button>
            </div>
        </div>
   <div className="first-part">
        <div className="second-div-in-sign">
            <img src={img1} alt="" />
        </div>
        <div className="text-center sign-content">
            <h6>Step <span className='fw-bold'>1</span> of <span className='fw-bold'> 4</span></h6>
            <h2 className='fw-bold'>Finish setting up your <br />account </h2>
            <h5>Netflix is personalised for you. <br /> Create a password to watch on any <br />device at any time.</h5>
          <Button variant='contained' className='bg-danger mb-5' onClick={()=>{navigate('step1')}}>NeXT</Button>
        </div>
    </div>
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
    </>
  )
}
