import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CertificateImage from './Component/CertificateImage/CertificateImage'
import Home from './Component/Home/Home'


function App() {


  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="certificate" element={<CertificateImage />} />
      </Routes>
    </div>
  )
}

export default App
