import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Intro from './Intro'
import './App.css'
import Registration from './Registration'
import ForgetPassword from './ForgetPassword'
import { lazy,Suspense } from 'react'
import RegisterProcess from './RegisterProcess'
import Step1 from './register/Step1'
import StepNav from './register/StepNav'
import Stepfooter from './register/Stepfooter'
import Step2 from './register/Step2'
import Step3 from './register/Step3'
import Step4 from './register/Step4'
import MovieList from './MovieList'
import Moviedetails from './Moviedetails'
import LogoutNav from './LogoutNav'
import Addtrailer from './Addtrailer'

export default function App() {
  return (
    <React.StrictMode> 
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='intro' element={<Intro/>}/>
      <Route path='registration' element={<Registration/>}/>
      <Route path='forgetpassword' element={<ForgetPassword/>}/>
      <Route path='registerprocess' element={<RegisterProcess/>}/>
      <Route path='registerprocess/step1' element={<Step1/>}/>
      <Route path='stepnav' element={<StepNav/>}/>
      <Route path='stepfooter' element={<Stepfooter/>}/>
      <Route path='registerprocess/step2' element={<Step2/>}/>
      <Route path='registerprocess/step3' element={<Step3/>}/>
      <Route path='registerprocess/step4' element={<Step4/>}/>
      <Route path='movielist' element={<MovieList/>}/>
      <Route path='moviedetails' element={<Moviedetails/>}/>
      <Route path='home' element={<LogoutNav/>}/>
      <Route path='Addtrailer' element={<Addtrailer/>}/>



     </Routes>
     </BrowserRouter>
     </React.StrictMode>
  )
}
