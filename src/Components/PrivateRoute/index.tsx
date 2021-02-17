import React from 'react'
import { Route } from 'react-router-dom'
import { getData } from '/storage'

type Props = {
  children: React.ReactNode
  path: string
}

const PrivateRoute = ({ children, path }: Props) => (
  <Route path={path}>
    {({ history }) => {
      const { token } = getData()

      if (!token) history.push('/login')

      return children
    }}
  </Route>
)

export default PrivateRoute
