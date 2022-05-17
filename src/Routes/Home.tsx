import React, { useEffect, useState } from 'react'

const Home: React.FC<any> = () => {
  const [message, setMessage] = useState({ msg: '' })

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080', { mode: 'cors' })
      const data = await response.json()
      setMessage(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <p>
        <b>Message from API:</b> {message.msg !== '' ? message.msg : 'ERROR'}
      </p>
    </>
  )
}

export default Home
