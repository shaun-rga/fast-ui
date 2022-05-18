import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Home from '../../Routes/Home'
import Deals from '../../Routes/Deals'
import Companies from '../../Routes/Companies'
import Contacts from '../../Routes/Contacts'
import Reports from '../../Routes/Reports'

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
