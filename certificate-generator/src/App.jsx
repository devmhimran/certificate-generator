import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CertificateMain from './Component/CertificateMain/CertificateMain'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import NavMenu from './Component/NavMenu/NavMenu'
import Register from './Component/Register/Register'


function App() {


  return (
    <div className="App">
      {/* <Home /> */}
      <NavMenu />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="certificate-generator" element={<CertificateMain/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
