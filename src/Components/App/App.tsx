import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Home from '../../Routes/Home'
import Companies from '../../Routes/Companies'
import Contacts from '../../Routes/Contacts'
import './App.css'

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Box m={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
