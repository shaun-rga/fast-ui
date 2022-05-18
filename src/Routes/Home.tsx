import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Home: React.FC<any> = () => {
  const [message, setMessage] = useState({ msg: '' })

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080', { mode: 'cors' })
      const data = await response.json()
      setMessage(data)
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, [])

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontWeight: 'medium' }}
        gutterBottom
      >
        Home
      </Typography>
      <Typography variant="h6" align="center">
        <b>Message from API:</b> {message.msg !== '' ? message.msg : 'ERROR'}
      </Typography>
    </>
  )
}

export default Home
