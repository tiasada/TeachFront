import React from 'react'
import { NotFoundImage } from '/assets/Images'
import { TextPattern } from '../../components/Texts'
import { ButtonSecundary } from '../../ui/Buttons/button'

export const NotFound = () => (
  <main>
      <NotFoundImage />
      <div style={{ display: 'inline-block' }}>
          <TextPattern>Página não encontrada</TextPattern>
          <TextPattern>Error 404</TextPattern>
          <ButtonSecundary type="button" color="primary" >Home</ButtonSecundary>
          <ButtonSecundary type="button" color="primary" >Support</ButtonSecundary>
      </div>
  </main>
)

export default NotFound
