import * as React from 'react'
import vedio1 from './videos/vedio1.mp4'
import './Intro.css'
import part2image from './images/part2image.jpg'
import gif from './images/downgif2.gif'
import  part2inner from './images/boxshot.png'
import part3img1 from './images/mobileimage-part3.png'
import  part4img from './images/part4image.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import AOS from 'aos';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useState,useEffect } from 'react'
 

export default function Intro() {
  AOS.init();
    const [expanded, setExpanded] = React.useState(false);
    const [active,setactive]=useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
   handleScroll()
    },[]);
    function handleScroll() {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    
    const  scrollTo=()=>{
     window.scrollTo({
      top:0,
      behavior:'smooth'
     })
    }
  return (
     <>
    <div className='part1 '>
        <div className='container row grid1'> 
        <div className='col-md-7 text-light ps-5' data-aos='fade-right'  data-aos-duration="1000" >
         <h1 className='heading' >Enjoy on your TV</h1>
         <p className='para'>Watch on smart TVs, PlayStation, Xbox, Chromecast,Apple TV,<br /> Blu-ray players and more.</p>
         
        </div>
        <div className='col-md-5 ' data-aos='fade-left'  data-aos-duration="1000"  >
            <video src={vedio1} loop autoPlay controls muted className='vedio'></video>
        </div>
        </div>
    </div>

    {active && (<div className="scroll-btn" onClick={scrollTo}>
      <div className='p-1 bg-danger rounded-5'>
         <KeyboardDoubleArrowUpIcon  style={{zIndex:999}} />
         </div>
        </div>)}
    <div className='part2 ' >
        <div className='container row grid1'  data-aos='fade-up'  data-aos-duration="2000"> 
        <div className='col-md-6 ps-5 part-2-col-1'    >
            <img src={part2image} alt="" className='part2image'/>
            <div className='part2inner'>
                <div>
                    <img src={part2inner} alt="" id='part2innerimage'/>
                </div>
                <div>
                    <p className='text-light'>Stranger Things <br /><span style={{color:'blue'}}>Donloading...</span></p>
                    
                </div>
                <div>
                    <img src={gif} alt="" id='gif' />
                </div>
            </div>
        </div>
        <div className='col-md-6 text-light ps-5 ' >
         <h1 className='heading'>Download your shows to watch offline</h1>
         <p className='para'>Save your favourites easily and always have something to watch.</p>
        </div>
        </div>
    </div>


    <div className='part2 '>
        <div className='container row grid1'> 
        <div className='col-md-7 text-light ps-5' data-aos='fade-right'  data-aos-duration="1000" >
         <h1 className='heading'>Watch EveryWhere</h1>
         <p className='para'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className='col-md-5 part3-col-2'  data-aos='fade-left'  data-aos-duration="1000"   >
                <div>
                    <img src={part3img1} alt="" className='part-3-images' />
                </div>
        </div>
        </div>
    </div>

    <div className='part2 '   >
        <div className='container row grid1' data-aos='fade-down'  data-aos-duration="2000"> 
        <div className='col-md-6 ps-5 part-2-col-1'    >
            <img src={part4img} alt="" className='part2image '/>
        </div>
        <div className='col-md-6 text-light ps-5 ' >
         <h1 className='heading'>Download your shows to watch offline</h1>
         <p className='para'>Save your favourites easily and always have something to watch.</p>
        </div>
        </div>
    </div>
  
    <div className='part5'>
        <div className='container  frequently-asked-div'> 
            <div className='pt-5'>
                <Typography variant='h3' className='text-light text-center mb-4'>Frequenty Asked Questions</Typography>
                <div >
      <Accordion  style={{backgroundColor:'black'}}
       expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
      >
        <AccordionSummary   
          className='accorionsummary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        
        >
          <Typography variant='h5' className='accordion'> What is Netflix ?</Typography>
        </AccordionSummary>
         <AccordionDetails  style={{backgroundColor:'#2D2D2D'}}
          className='text-light mt-1' >
          <Typography  variant='h6'>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
          </Typography>
          <Typography className='mt-3'  variant='h6'>
          You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'black'}} className='mt-3' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary   
        className='accorionsummary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant='h5' className='accordion'>How much does Netflix cost ? </Typography>
        </AccordionSummary > 
         <AccordionDetails  style={{backgroundColor:'#2D2D2D'}}
          className='text-light mt-1'>
          <Typography  variant='h6'>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-3' style={{backgroundColor:'black'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary   
      className='accorionsummary' 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant='h5' className='accordion'>Where can I Watch ? </Typography>
        </AccordionSummary>
         <AccordionDetails  style={{backgroundColor:'#2D2D2D'}}
          className='text-light mt-1'>
          <Typography  variant='h6'>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          </Typography>
          <Typography  variant='h6' className='mt-3'>
          You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-3'style={{backgroundColor:'black'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary  
       className='accorionsummary' 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant='h5' className='accordion'> Where do I cancel ? </Typography>
        </AccordionSummary>
         <AccordionDetails  style={{backgroundColor:'#2D2D2D'}}
          className='text-light mt-1'>
          <Typography  variant='h6'>
          Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-3' style={{backgroundColor:'black'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary 
      className='accorionsummary'   
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant='h5' className='accordion'>What can I Watch In Netflix ? </Typography>
        </AccordionSummary>
         <AccordionDetails  style={{backgroundColor:'#2D2D2D'}}
          className='text-light mt-1'>
          <Typography  variant='h6'>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-3' style={{backgroundColor:'black'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary 
       className='accorionsummary'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant='h5' className='accordion'>Is Netflix is good for Kids ? </Typography>
        </AccordionSummary>
         <AccordionDetails  style={{backgroundColor:'#2D2D2D'}}
          className='text-light mt-1'>
          <Typography variant='h6'>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
          </Typography>
          <Typography variant='h6' className='mt-4'>
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
            </div>
        <div className='second-div-asked'>
                <Typography  variant='h6' className='text-center text-light mt-5 mb-3'>Ready to watch? Enter your email to create or restart your membership.</Typography>
       <div className='get-started'>
      <input type="email" name="email" id="email" placeholder='Enter Address' className='p-2'/>
      <Button className='ms-3 text-light bg-danger' variant='contained' id='get-started-btn'>Get Started <span><ArrowForwardIosIcon/></span></Button>
      </div>
     </div>
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
