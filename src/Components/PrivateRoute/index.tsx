import React from 'react'
import { Route } from 'react-router-dom'
import { Navbarmenu } from '../NavBars'
import { getData } from '/storage'
import { colors } from '/theme/colors'

type Props = {
  children: React.ReactNode
  path: string
}

const PrivateRoute = ({ children, path }: Props) => (
  <Route path={path}>
    {({ history }) => {
      const { token } = getData()

      if (!token) history.push('/login')

      return (
        <>
          <Navbarmenu color={colors.primary} />
          <main style={{ marginTop: '78px' }}>{children}</main>
        </>
      )
    }}
  </Route>
)

export default PrivateRoute
