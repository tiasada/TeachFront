import React from 'react'
import { NotFoundImage } from '/assets/Images'
import { TextPattern } from '../../components/Texts'
import Button from '../../ui/Buttons/button'
import { useHistory } from 'react-router-dom'

export const NotFound = () => {
  const history = useHistory()
  function handleClick () {
    history.push('/home')
  }
  return (
    <main>
      <NotFoundImage />
      <div style={{ display: 'inline-block' }}>
        <TextPattern>Página não encontrada</TextPattern>
        <TextPattern>Error 404</TextPattern>
        <Button type="button" color="primary" onClick={handleClick} >Home</Button>
        {/* <Button type="button" color="primary" >Support</Button> */}
      </div>
    </main>
  )
}

export default NotFound
