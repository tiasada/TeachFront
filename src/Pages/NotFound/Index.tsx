import React from 'react'
import { NotFoundImage } from '/assets/Images'
import Button from '../../ui/Buttons'
import { useHistory } from 'react-router-dom'
import Typography from '/ui/Typography'

export const NotFound = () => {
  const history = useHistory()
  function handleClick () {
    history.push('/home')
  }
  return (
    <main>
      <NotFoundImage />
      <div style={{ display: 'inline-block' }}>
        <Typography variant='h1'>Página não encontrada</Typography>
        <Typography variant='h1'>Error 404</Typography>
        <Button type="button" color="primary" onClick={handleClick} >Home</Button>
      </div>
    </main>
  )
}

export default NotFound
