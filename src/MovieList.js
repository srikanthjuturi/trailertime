import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import './Movielist.css'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import LogoutNav from './LogoutNav';
import { Link } from 'react-router-dom';


export default function MovieList() {
const [movielist,setmovielist]=useState([])
const [id,setid]=useState('')
const Navigate =useNavigate()

const getdata=async()=>{
try {
	const response = await axios.get('http://localhost:5000/moviedata',{headers:{'Content-Type':'application/json'}})
setmovielist(response.data)
 
} catch (error) {
	console.error(error);
}}

const getid=(id)=>{
    if(id){ 
        const a = movielist.filter((item)=>(item.id == id))
        setid(a)
      Navigate('/moviedetails',{state: {id:id}})
    }
}
 
useEffect(()=>{
    getdata()
},[])
 
  return (
    <>
    <LogoutNav/>
       <div className="movie-grid">
            {movielist.map((item) => (
                <div key={item.id} className='movie-item' onClick={()=>{getid(item.id)}}>
                  <div className='movie-parent'>
                    <div className='movie-child'>
                    <img src={item.Images} alt="no-image" className='movie-images-in-movielist' />
                    <h5 className='title mt-3 ms-2 text-center text-light'>Movie : {item.Title}</h5>
                    </div>
                    </div>
                </div> 
            ))}
        </div>
        <div className='intro-footer'>
     <Typography>Question ? Call 000-34-343-434-234-34</Typography>
     <div className="row mt-3">
        <div className=" col-md-3  col-6">
            <div className='faq-links'>
            <Link className='text-light'>FAQ</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Investor Relations</Link>
            </div>
             <div className='faq-links'>
            <Link className='text-light'>Privacy</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Speed Test</Link>
            </div>
            <div className='faq-links'>
                <select name="l" id="l">
                    <option value="eng">English</option>
                    <option value="hin">Hindi</option>
                </select>
            </div>
            {/* <div className='faq-links'>
            <Link className='text-light'>Netflix India</Link>
            </div> */}
        </div>
        <div className=" col-md-3  col-6">
        <div className='faq-links'>
            <Link className='text-light'>Help  Center</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Jobs</Link>
            </div>
             <div className='faq-links'>
            <Link className='text-light'>Cookie Preferences</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>legal Notice</Link>
            </div>
        </div>
        <div className=" col-md-3  col-6">
        <div className='faq-links'>
            <Link className='text-light'>Account</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Ways to Watch</Link>
            </div>
             <div className='faq-links'>
            <Link className='text-light'>Corporate Information</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Only On Netflix</Link>
            </div>
        </div>
        <div className=" col-md-3  col-6">
        <div className='faq-links'>
            <Link className='text-light'>Media Center</Link>
            </div>
            <div className='faq-links'>
            <Link className='text-light'>Terms Of Use</Link>
            </div>
             <div className='faq-links'>
            <Link className='text-light'>contact Us</Link>
            </div>
        </div>
     </div>
     <div className='mt-4'>
     <Link className='text-light' style={{textDecoration:'none'}}>Netflix India</Link>
     </div>
      
    </div>

    </>
  )
}
