import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import img from './images/logo.png'
import './Forgetpassword.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ForgetPassword() {
    const navigate= useNavigate()
    const [options,setoptions]=useState("sms")
    const [open,setopen]=useState(true)
    const [country,setcountry]=useState([])
    const getdata =async()=>{  
    try{
      let data = await axios.get('https://restcountries.com/v3.1/all')
      let countrydata= data.data.map((country)=>({
        name: country.name.common,
        code: country.cca2,
        flag: country.flags.png,
        phonecode:country.ccn3
       }))
       setcountry(countrydata)
    }
    catch(error){
      console.error(error)
    }
}
 useEffect(()=>{getdata()},[country])

    const changeselected=(e)=>{
      const option = e.target.value;
      setoptions(option)
    }
     

  return (
    <>
    <div className='forget-backgroud'>
        <nav className='pt-3' >
        <div className='logo'>
            <img src={img} alt="logo" id='logo' />
        </div>
        <div className='select-and-buttun shadow'>
           <Button variant='contained' className='bg-danger' id='sign-btn' onClick={()=>{navigate('/registration')}}>Sign In</Button>
        </div>
    </nav> 
  
  <div className='forget-form'>
    <Typography variant='h5' className='forget-head'>Update password, email or phone</Typography>
  <div className='mt-3 '>
   <Typography variant='body' className='mt-5'>How would you like to reset your password?</Typography>
      <div className='mt-3'>
        <input type="radio" name="contact" id="radio1" className='form-check-input' value="sms" checked={options==='sms'} onChange={changeselected}/>
        <label htmlFor="radio1" className='ms-2 form-control-label'> Text Message (SMS)</label>
        </div>
        <div className='mt-1' >
        <input type="radio" name="contact" className='form-check-input' id="radio" value="email" checked={options==='email'}   onChange={changeselected}/>
        <label htmlFor="radio" className='ms-2 form-check-label'>Email</label>
      </div>
 
      {options==='email' && <div className='mt-3'>
        <Typography variant='body'>We will send you an email with instructions on how to reset your password.</Typography>
        <input type="email" name="email2" className='mt-3' id="email2" placeholder='name@example.com'   />
        <Button variant='contained' fullWidth className='mt-3 pt-2 pb-2 fw-bold' >Email Me</Button>
         <div className='mt-4'>
         <Link to=''>I can't remember my email address or phone number.</Link>
         </div>

      </div> }
      {options==='sms' && <div className='mt-3'>
        <Typography>We will text you a verification code to reset your password. Message and data rates may apply.</Typography>
       
<div className="input-group mb-3 mt-3">
     <select name="country" id="select-country" className='form-select' >
      {country.map((country,index)=>(
        <option  key={index} id='countries-names'> 
         + {country.phonecode}  {country.name}</option>
      ))}
     </select>
     <input type="text" className="form-control" />
</div>
<Button variant='contained' fullWidth className='mt-3 mb-3 pt-2 pb-2 fw-bold' >Text Me</Button>
<Link to=''>I can't remember my email address or phone number.</Link>

      </div> }
        
    </div>
  </div>
   
   <div className='terms-in-forget'>
    <Typography component="div">This page is protected by Google reCAPTCHA to ensure you're not a bot.{open ?(<span id='learn-more-forget' onClick={()=>{setopen(false)}}>Learn more</span>):(<Typography className='mt-3'> The information collected by Google reCAPTCHA is subject to the Google 
      <a href="https://policies.google.com/privacy">  Privacy Policy</a>  and  <a href="https://policies.google.com/terms"> Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general
      security purposes (it is not used for personalised advertising by Google).</Typography>)} </Typography>
   </div>
    </div>
    <div className='forget-footer'>
     <Typography className='text-light'>Question ? Call 000-34-343-434-234-34</Typography>
     <div className="row mt-3">
        <div className=" col-md-3  col-6">
            <div className='faq-links'>
            <Link className='text-light'>FAQ</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'> Cookie Preferences</Link>
            </div>
            <div className='faq-links'>
                <select name="l" id="l">
                    <option value="eng">English</option>
                    <option value="hin">Hindi</option>
                </select>
            </div>
        </div>
        <div className=" col-md-3  col-6">
        <div className='faq-links'>
            <Link className='text-light'>Help  Center</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Coperate Information</Link>
            </div>
        </div>
        <div className=" col-md-3  col-6">
        <div className='faq-links'>
            <Link className='text-light'>Terms and Use</Link>
            </div>
        </div>
        <div className=" col-md-3  col-6">
        <div className='faq-links'>
            <Link className='text-light'>Privacy</Link>
            </div>
        </div>
     </div>      
    </div>
   
    </>
  )
}
 