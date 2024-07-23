import React from 'react'
import '../RegisterProcess.css'
import './Step2.css'
import {  useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import StepNav from './StepNav'
import Stepfooter from './Stepfooter'
import Aos from 'aos'
import { useRef } from 'react'

export default function Step4() {
    Aos.init()
 const a = useRef([])
    const data ={a:'Monthly price',b:"  Video and sound quality",c:'Resolution',d:'Spatial audio (immersive sound)',e:'Supported devices',f:'Devices your household can watch at the same time',g:'Download devices'}
  const navigate =useNavigate()

  const showshadow=(e)=>{
    for(let ele of a.current){
        ele.classList.remove('border-box')    
    }
   e.currentTarget.classList.add('border-box')
  }
  return (
    <>
    <StepNav/>
 <div className="first-part">
      <div className='ms-5'>
      <h6 className='mt-4 '>Step <span className='fw-bold'>3</span> of <span className='fw-bold'> 4</span></h6>
        <Typography variant='h4' className='fw-bold mb-5'>Choose the plan that's right for you </Typography>
      </div>
      <div className="container">
        <div className="box-of-plans">
            <div className="col-md-3 mt-4 pe-auto border mb-5 border-2 rounded" ref={(e)=>a.current[0]=e} onClick={(e)=>{showshadow(e)}}>
                <div className='plan'>
                    <Typography className='text-center'>
                    Premium <br />
                    4K + HDR
                    </Typography>
                     <div className='float-end pe-3 '><svg width="24"  length="22" viewBox="0 0 24 22" fill="none" className="success-icon"
                     data-uia="success-svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 
                     5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                     14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#0071EB"></path></svg>
                     </div>
                </div>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.a}</Typography>
                <Typography className='fs-6'> &#8377; 600</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.b}</Typography>
                <Typography className='fs-6'> Best</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.c}</Typography>
                <Typography className='fs-6'> 4K (Ultra HD) + HDR</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.d}</Typography>
                <Typography className='fs-6'> Included</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.e}</Typography>
                <Typography className='fs-6'>TV, computer, mobile phone, tablet
                </Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.f}</Typography>
                <Typography className='fs-6'> 4</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.g}</Typography>
                <Typography className='fs-6'> 6</Typography>
                </div>
            </div>
            <div className="col-md-3 mt-4 border mb-5 border-2 rounded"  ref={(e)=>a.current[1]=e} onClick={(e)=>{showshadow(e)}} >
                <div className='plan'>
                    <Typography className='text-center'>
                    Standerd <br />
                    4K + HDR
                    </Typography>
                    <div className='float-end pe-3 '><svg width="24"  length="22" viewBox="0 0 24 22" fill="none" className="success-icon"
                     data-uia="success-svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 
                     5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                     14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#0071EB"></path></svg>
                     </div>
                </div>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.a}</Typography>
                <Typography className='fs-6'> &#8377; 499</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.b}</Typography>
                <Typography className='fs-6'> Great</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.c}</Typography>
                <Typography className='fs-6'> 1080p (full HD)</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.e}</Typography>
                <Typography className='fs-6'>TV, computer, mobile phone, tablet
                </Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.f}</Typography>
                <Typography className='fs-6'> 2</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.c}</Typography>
                <Typography className='fs-6'> 1080p (full HD)</Typography>
                </div>
                <hr className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.g}</Typography>
                <Typography className='fs-6'> 2</Typography>
                </div>
            </div>
            <div className="col-md-3 border border-2 rounded mb-5 "  ref={(e)=>a.current[2]=e} onClick={(e)=>{showshadow(e)}} >
               <div className='bg-primary rounded-top pb-1 pt-1 text-light text-center'>Most Popular</div>
                <div className='plan'>
                    <Typography className='text-center'>
                    Premium <br />
                    4K + HDR
                    </Typography>
                     <div className='float-end pe-3 '><svg width="24" length="22" viewBox="0 0 24 22" fill="none" className="success-icon"
                     data-uia="success-svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 
                     5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                     14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#0071EB"></path></svg>
                     </div>
                </div>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.a}</Typography>
                <Typography className='fs-6'> &#8377; 600</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.b}</Typography>
                <Typography className='fs-6'> Best</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.c}</Typography>
                <Typography className='fs-6'> 4K (Ultra HD) + HDR</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.d}</Typography>
                <Typography className='fs-6'> Included</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.e}</Typography>
                <Typography className='fs-6'>TV, computer, mobile phone, tablet
                </Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.f}</Typography>
                <Typography className='fs-6'> 4</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.g}</Typography>
                <Typography className='fs-6'> 6</Typography>
                </div>
            </div>
            <div className="col-md-3 mt-4 border border-2 rounded mb-5 "  ref={(e)=>a.current[3]=e} onClick={(e)=>{showshadow(e)}}>
                <div className='plan'>
                    <Typography className='text-center'>
                    Premium <br />
                    4K + HDR
                    </Typography>
                     <div className='float-end pe-3 '><svg width="24" length="22" viewBox="0 0 24 22" fill="none" className="success-icon"
                     data-uia="success-svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 
                     5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                     14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#0071EB"></path></svg>
                     </div>
                </div>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.a}</Typography>
                <Typography className='fs-6'> &#8377; 600</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.b}</Typography>
                <Typography className='fs-6'> Best</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.c}</Typography>
                <Typography className='fs-6'> 4K (Ultra HD) + HDR</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.d}</Typography>
                <Typography className='fs-6'> Included</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.e}</Typography>
                <Typography className='fs-6'>TV, computer, mobile phone, tablet
                </Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.f}</Typography>
                <Typography className='fs-6'> 4</Typography>
                </div>
                <hr  className='ms-3 me-3'/>
                <div className='ms-4 mt-3'>
                <Typography className='text-secondary'>{data.g}</Typography>
                <Typography className='fs-6'> 6</Typography>
                </div>
            </div>
        </div>
      </div>
      <div className='step-4-btn-and-content'>
      <Typography className='body2  text-secondary'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a href="https://policies.google.com/privacy"> Terms of Use</a>   for more details.</Typography>
      <Typography className='body2  text-secondary mt-3'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</Typography>
      </div>
      <div className='step-4-btn'>
      <Button variant='contained' className='bg-danger mb-5 mt-5' onClick={() => { navigate('/registerprocess/step4') }} >NeXT</Button>
   </div>
    
    </div>
 <Stepfooter/>
    </>
  )
}
