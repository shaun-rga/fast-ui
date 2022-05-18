import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Button, Tabs, Tab, Typography } from '@mui/material'
import {
  Home,
  Handshake,
  CorporateFare,
  People,
  Feed,
} from '@mui/icons-material'

const Navbar: React.FC<any> = () => {
  const location = useLocation()

  return (
    <Box display="flex" sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
      <Button color="primary" sx={{ ml: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'medium' }} component="div">
          FAST
        </Typography>
      </Button>
      <Box flexGrow={1} />
      <Tabs value={location.pathname}>
        <Tab
          label="Home"
          icon={<Home />}
          iconPosition="start"
          component={Link}
          to="/"
          value="/"
        />
        <Tab
          label="Deals"
          icon={<Handshake />}
          iconPosition="start"
          component={Link}
          to="/deals"
          value="/deals"
        />
        <Tab
          label="Companies"
          icon={<CorporateFare />}
          iconPosition="start"
          component={Link}
          to="/companies"
          value="/companies"
        />
        <Tab
          label="Contacts"
          icon={<People />}
          iconPosition="start"
          component={Link}
          to="/contacts"
          value="/contacts"
        />
        <Tab
          label="Reports"
          icon={<Feed />}
          iconPosition="start"
          component={Link}
          to="/reports"
          value="/reports"
        />
      </Tabs>
    </Box>
  )
}

export default Navbar
