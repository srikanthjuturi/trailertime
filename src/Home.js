import React, { useState } from 'react'
import img from './images/logo.png'
import './Home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Intro from './Intro';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
 

export default function Home() {
  const navigate=useNavigate()
  const [getmail,setmail]=useState('')
  const [error,seterror]=useState({getmail:''})

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const signup=(e)=>{
    e.preventDefault() 
    if(getmail.trim()===''){
      seterror((err)=>({...err,getmail:'Please Enter your  Email'}))
    }
    else if(!emailPattern.test(getmail)){
      seterror((err)=>({...err,getmail:'Please Enter a Valid Email'}))
    }
    else{
      seterror((err)=>({...err,getmail:''}))
      setmail('')
      navigate('/registerprocess')
     localStorage.setItem('getmail',getmail)
    }
  }
  return (
    <>
    <div className='main-div'>
      <div className='pt-3'>
    <nav className='' >
        <div className='logo'  >
            <img src={img} alt="logo" id='logo' />
        </div>
        <div className='select-and-buttun shadow'>
            <select name="lang" id="language">
                <option value="english">  English</option>
                <option value="hindi">Hindi</option>
            </select>
           <Button variant='contained' className='bg-danger' id='sign-btn' onClick={()=>{navigate('/registration')}}>Sign In</Button>
        </div>
    </nav> 
    </div>
    <div className='demo'>
      <h1 className='head'>Unlimited movies, TV shows and more</h1>
      <p className='para'>Watch anywhere. Cancel anytime.</p>
      <p  className='para'>Ready to watch? Enter your email to create or restart your membership.</p>
      <form className='d-flex'>
      <input type="email" name="email" id="email" placeholder='Enter Address' className='p-2' value={getmail} onChange={(e)=>{setmail(e.target.value)}} />
     <Button className=' ms-3 text-light bg-danger' variant='contained' id='get-started-btn' onClick={signup}>Get Started <span><ArrowForwardIosIcon/></span></Button>
      </form>
      {error.getmail && <div className='text-danger mt-3 ' id='error-home'><span className='me-2 '><CancelIcon style={{fontSize:'19px'}}/></span>{error.getmail}</div>}
    </div>
    </div>
    <Intro/>
    </>
  )
}
