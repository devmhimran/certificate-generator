import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CertificateMain from './Component/CertificateMain/CertificateMain'
import Home from './Component/Home/Home'
import Loading from './Component/Loading/Loading'
import Login from './Component/Login/Login'
import NavMenu from './Component/NavMenu/NavMenu'
import Register from './Component/Register/Register'
import RequireAuth from './Component/RequireAuth/RequireAuth'


function App() {


  return (
    <div className="App">
      {/* <Home /> */}
      <NavMenu />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="certificate-generator" element={<RequireAuth>
          <CertificateMain />
        </RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='loading' element={<Loading />} ></Route>
      </Routes>
    </div>
  )
}

export default App
