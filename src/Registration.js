import React, { useEffect, useState } from 'react'
import img from './images/logo.png'
import './Registration.css'
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';


const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Default border color
    },
    '&:hover fieldset': {
      borderColor: 'white', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Border color when focused
    },
    '& input': {
      color: 'white', // Change the font color of the input text
    },

  },
  '& .MuiInputLabel-root': {
    color: "white",
    '&.Mui-focused': {
      color: 'white', // Change the label color when focused
    },

  },
}));


export default function Registration() {


  const navigate = useNavigate()
  const [open, setopen] = useState(true)
  const mail = localStorage.getItem('getmail')
  const [formdata, setformdata] = useState({ email: mail, password: '' })
  const [error, seterror] = useState({ email: '', pass: '' })
  const [user, setuser] = useState(false)

  const updatedata = (e) => {
    const { name, value } = e.target;
    setformdata(() => ({ ...formdata, [name]: value }))
  }


  const submitdata = async () => {

    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let valid = true;
    if (formdata.email.trim() === '') {
      seterror((error) => ({ ...error, email: 'Enter Your Email ID' }))
      valid = false;

    }
    else if (!email.test(formdata.email)) {
      seterror((error) => ({ ...error, email: 'Enter valid Email ID' }))
      valid = false;
    }
    else {
      seterror((error) => ({ ...error, email: '' }))
    }

    if (formdata.password.trim() === '') {
      seterror((error) => ({ ...error, pass: 'Please Enter Password ' }))
      valid = false;
    } else if (formdata.password.trim().length < 8) {
      seterror((error) => ({ ...error, pass: 'Please enter minimum 8 charecters ' }))
      valid = false;
    }
    else {
      seterror((error) => ({ ...error, pass: '' }))
    }

    if (valid) {
      try {
        const logindata = await axios.post('http://localhost:5000/login', { email: formdata.email, passwords: formdata.password },
          { headers: { "Content-Type": 'application/json' } }
        )
        if(logindata.status){
          navigate('/movielist')
        }
      }
      catch (e) {
        console.error(e)
        setuser(true)
        setTimeout(() => {
          setuser(false)
        },3000);
      }
    }
  }


  return (
    <>
      <div className='main-div'>
        <div className='pt-3'>
          <nav className='' >
            <div className='logo' onClick={()=>{navigate('/')}}>
              <img src={img} alt="logo" id='logo' />
            </div>
          </nav>
        </div>

      {user &&<Alert severity="error" className='w-50 text-center m-auto'>User not Register Please register and come again |</Alert>}

        <div className='login-form'>
          <Typography variant='h4'>Sign In</Typography>
          <div>
            <CustomTextField className="outlined-basic mt-4 mb-2 text-light" placeholder='Email or Mobile Number'
              label="Email or Mobile Number" variant="outlined" fullWidth name='email' value={formdata.email} onChange={updatedata} />
          </div>
          {error.email && <div className='text-danger'>{error.email} </div>}
          <div>
            <CustomTextField className="outlined-basic mt-4 mb-2 text-light" type='password' name='password'
              value={formdata.password} onChange={updatedata} label="Password" placeholder='Password' variant="outlined" fullWidth />
            {error.pass && <div className='text-danger'>{error.pass} </div>}
          </div>
          <div>
            <Button variant='contained' className='sign-in-btn mt-3' fullWidth onClick={submitdata}>Sign In</Button>
          </div>
          <h6 className='text-center mt-3 mb-3 forget-password' onClick={() => navigate('/forgetpassword')}>Forget Password</h6>
          <h6>New to Netflix? <span className='fw-bold sign-up-now' onClick={() => { navigate('/') }} >Sign Up Now </span></h6>
          <Typography variant='body'>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. {open ? (<span className='text-primary learn-more ' onClick={() => { setopen(false) }}>Learn More</span>) : (<div className='mt-3'>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service,
              and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes
              (it is not used for personalised advertising by Google).</div>)}
          </Typography>
        </div>
      </div>
      <div className='sign-footer'>
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
          <div className="col-md-3  col-6">
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
