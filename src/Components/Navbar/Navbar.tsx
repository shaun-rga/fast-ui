import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Navbar: React.FC<any> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ px: 1 }}>
          <NavLink to="/">Home</NavLink>
        </Typography>
        <Typography variant="h6" component="div" sx={{ px: 1 }}>
          <NavLink to="/companies">Companies</NavLink>
        </Typography>
        <Typography variant="h6" component="div" sx={{ px: 1 }}>
          <NavLink to="/contacts">Contacts </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
