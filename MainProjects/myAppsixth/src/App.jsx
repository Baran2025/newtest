import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './screens/Home'
import ProtectedRoutes from './config/ProtectedRoutes';
import Login from './screens/Login'
import SignUp from './screens/SignUp'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route element={<ProtectedRoutes />}>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Home />} />


      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
