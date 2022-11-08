import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CertificateMain from './Component/CertificateMain/CertificateMain'
import Home from './Component/Home/Home'
import NavMenu from './Component/NavMenu/NavMenu'


function App() {


  return (
    <div className="App">
      {/* <Home /> */}
      <NavMenu />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="certificate-generator" element={<CertificateMain/>} />
      </Routes>
    </div>
  )
}

export default App
