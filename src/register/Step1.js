import React from 'react'
import '../RegisterProcess.css'
import './Step2.css'
import {  useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import StepNav from './StepNav'
import Stepfooter from './Stepfooter'
import Aos from 'aos'
import { useState } from 'react'
import axios from 'axios'
export default function Step1() {
  Aos.init()
  const navigate =useNavigate()
  const mail = localStorage.getItem('getmail')
  const [formdata,setformdata]=useState({email:mail,passwords:''})
  const [error,seterror]=useState({email:'',passwords:''})
 
  
const getdata=(e)=>{
  const  {name,value}=e.target;
  setformdata(()=>({...formdata,[name]:value}))
}

const validatedata= async()=>{

  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   let valid = true

  if(formdata.email.trim()===''){
    seterror((error)=>({...error,email:'please Enter a Email'}))
   valid = false

  }
  else if(!email.test(formdata.email)){
    seterror((error)=>({...error,email:'please vaild Email'}))
    valid = false

  }
  else{
    seterror((error)=>({...error,email:''}))
  }

  if(formdata.passwords.trim()===''){
    seterror((error)=>({...error,passwords:'Please enter a password'}))
    valid = false

  }else if(!formdata.passwords.trim().length > 8){
    seterror((error)=>({...error,passwords:'password must be atleast 8 charaters'}))
   valid = false

  }
  else{
    seterror((error)=>({...error,passwords:''}))
  }

  if(valid){
    try{
      let response = await axios.post('http://localhost:5000/register',{email:formdata.email,passwords:formdata.passwords},
        {headers:{"Content-Type":'application/json'}})
      if (response.status===200){
     navigate('/registerprocess/step2')
      }
      else{
        console.log('something is messing')
      }
    }
    catch(e){
      console.error(e)
      
    }
   
  }
  
}

  return (
    <>
    <StepNav/>
 <div className="first-part">
        <div className="step2">
            <div className='step2-inner' data-aos='fade-left' data-aos-duration='1000' >
            <h6>Step <span className='fw-bold'>1</span> of <span className='fw-bold'> 4</span></h6>
            <h2 className='fw-bold'>Create a password to Start <br /><span className='' >your membership</span></h2> 
            <h5>Just a few more steps and you're done! <br></br>
            We hate paperwork, too.</h5>
            <input type="email" name="email" className='form-control mt-3 pt-2 pb-2' placeholder='Email' value={formdata.email}  onChange={getdata}/>
            {error.email && <div className='text-danger'>{error.email}</div>}
            <input type="password" name="passwords"  className='form-control mt-3  pt-2 pb-2' placeholder='Enter a Password'value={formdata.passwords}  onChange={getdata} />
            {error.passwords && <div className='text-danger'>{error.passwords}</div>}
            <Button variant='contained' className='bg-danger mb-5 mt-3' onClick={validatedata} >NeXT</Button>
           </div>
        </div>
    </div>
 <Stepfooter/>
    </>
  )
}
