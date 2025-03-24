
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Signin from './Authlayout/Signin'
import Authlayout from './Authlayout'
import Otp from './Authlayout/Otp'
import Createaccount from './Authlayout/Createaccount'
import Register from './Authlayout/Register'

import Jobs from './Pages/Jobs'
import Forum from './Pages/Forum'
import Postjob from './Pages/Jobs/Postjob'
import Getjob from './Pages/Jobs/Getjob'



function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/Signin" />} />
        <Route path='/' element={<WebLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path='/job' element={<Jobs />} />
          <Route path='/postjob' element={<Postjob/>}/>
          <Route path='/getjob' element={<Getjob/>}/>
          <Route path='/forum' element={<Forum />} />



        </Route>
        <Route element={<Authlayout />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/account' element={<Createaccount />} />
          <Route path='/register' element={<Register />} />


        </Route>
      </>



    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
