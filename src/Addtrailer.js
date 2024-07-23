import React, { useEffect, useState } from 'react';
import './Addtrailer.css';
import { Button, Rating, Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import axios from 'axios'

export default function Addtrailer() {
  const [data, setData] = useState({Title: '', Rating:0, year:'', Genre: '', Duration: '', Story: '', Certificate: '', Votes:'', Images: '', Videos: ''});
  const [error, seterror] = useState({Title: '', Rating: '', year: '', Genre: '', Duration: '', Story: '', Certificate: '', Votes: '', Images: '', Videos: ''});
  const [show,setshow]=useState(false)
  const [success,setsuccess]=useState(false)


  const getdata = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };
  
const addata= async()=>{
   if(data.Title==='' || data.Certificate==='' || data.Duration==='' || data.Genre==='' || data.Images==='' || data.Rating==='' || data.Story==='' || data.Videos==='' || data.Votes==='' || data.year===''){
    setshow(true)
    setTimeout(() => {
    setshow(false)
    },2000);
   }

    try{
      console.log(data)
      const sentdata = await axios.post('http://localhost:5000/sentdata',
        {Title :data.Title,Rating:data.Rating,Year:data.year,Certificate:data.Certificate,Duration:data.Duration,Genre:data.Genre,Images:data.Images,Story:data.Story,Videos:data.Videos,Votes:data.Votes},
        {headers:{'Content-Type':'application/json'}})
      setsuccess(true)
      setTimeout(() => {
      setsuccess(false)
      },2000);
      setData({Title: '', Rating:0, year:'', Genre: '', Duration: '', Story: '', Certificate: '', Votes:'', Images: '', Videos: ''})
    }
    catch(error){
      console.log(error)
    }
}

 
  return (
    <>
    
      <div className='main-div-add'>
   {show && <Typography variant='h4' id='error-in-add'><span className='me-2 text-danger'><ErrorOutlineOutlinedIcon/></span>Please Fill All The Details</Typography>}
   {success && <Typography variant='h4' id='error-in-add'><span className='me-2 text-danger'><ErrorOutlineOutlinedIcon/></span>Your Trailer is add successfully thank you !</Typography>}

        <div className="add-grid">
          <div><input type="text" name="Title" className="input-in-add" placeholder='Enter movie title' value={data.Title} onChange={getdata} required /> </div>
          <div><input type="text" name="Rating" className="input-in-add" placeholder='Enter movie Rating' value={data.Rating} onChange={getdata} required /></div>
          <div><input type="text" name="year" className="input-in-add" placeholder='Enter movie Year' value={data.year} onChange={getdata} required /></div>
          <div><input type="text" name="Genre" className="input-in-add" placeholder='Enter movie Genre' value={data.Genre} onChange={getdata} required /></div>
          <div><input type="text" name="Duration" className="input-in-add" placeholder='Enter movie Duration' value={data.Duration} onChange={getdata} required /></div>
          <div><input type="text" name="Story" className="input-in-add" placeholder='Enter movie Description' value={data.Story} onChange={getdata} required /></div>
          <div><input type="text" name="Certificate" className="input-in-add" placeholder='Enter movie Certificate' value={data.Certificate} onChange={getdata} required /></div>
          <div><input type="text" name="Votes" className="input-in-add" placeholder='Enter movie Votes' value={data.Votes} onChange={getdata} required /></div>
          <div><input type="text" name="Images" className="input-in-add" placeholder='Enter movie Image link' value={data.Images} onChange={getdata} required /></div>
          <div><input type="text" name="Videos" className="input-in-add" placeholder='Enter movie Videos link' value={data.Videos} onChange={getdata} required /></div>
        </div>
        <div className='d-flex justify-content-center mt-5 '>
          <Button className='add-trailer-btn text-light border' variant='outlined' onClick={addata}>Add Trailer</Button>
        </div>
      </div>  
    </>
  );
}
