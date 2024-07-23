import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Movielist.css'
import { Typography } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import LogoutNav from './LogoutNav'
import { Link } from 'react-router-dom'
 

export default function Moviedetails() {
  const [movie, setmovie] = useState([])
  const location = useLocation()
  const { id } = location.state

  const moviedetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/moviedata/${id}`);
      setmovie(response.data[0])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => { moviedetails() }, [])
  console.log(movie)

  return (
    <>
    <div id='movie-details-bg'>
    <div className="mb-5">
    <LogoutNav/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 ">
            <img src={movie.Images} alt="Movie" className="movie-image-in-api" />
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <div className="content-box">
              <h2 className="movie-head text-li">Movie Details</h2>
              <Typography variant="h6" className="mt-2 text-primary-emphasis">
                <strong className='text-light'>Title:</strong> {movie.Title}
              </Typography>
              <Typography variant="h6" className="mt-2 text-primary-emphasis">
                <strong className='text-light'>Year:</strong> {movie.Year}
              </Typography>
              <Typography variant="h6" className="mt-2 text-primary-emphasis">
                <strong className='text-light'>Genre:</strong> {movie.Genre}
              </Typography>
              <Typography variant="h6" className="mt-2 text-primary-emphasis">
                <strong className='text-light'>Duration:</strong> {movie.Duration} <span className="text-primary"><AccessAlarmIcon /></span>
              </Typography>
              <Typography variant="h6" className="mt-3 text-primary-emphasis">
                <strong className='text-light'>Story:</strong> {movie.Story}
              </Typography>
              <div className="d-flex justify-content-evenly mt-3">
                <Typography variant="h5 text-primary-emphasis">
                  <strong className='text-light'>Votes:</strong> {movie.Votes} <span className="text-warning"><ThumbUpOffAltIcon /></span>
                </Typography>
                <Typography variant="h5 text-primary-emphasis">
                  <strong className='text-light'>Rating:</strong> {movie.Rating} <span className="text-success mb-1"><StarBorderPurple500Icon /></span>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <iframe src={movie.Videos} frameborder="0" allowFullScreen className='iframe-video'></iframe>
      </div>
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
