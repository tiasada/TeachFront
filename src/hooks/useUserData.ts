/* eslint-disable no-unused-vars */
import jwtDecode from 'jwt-decode'
import { getData } from '../storage'

export enum Role {
  Teacher = 'Teacher',
  Student = 'Student',
  Parent = 'Parent',
  School = 'School'
}
type Name = {
  username: string
}
// get from localStore
const useUserData = () => {
  const { token } = getData()
  return jwtDecode<{ role: Role, username: Name }>(token)
}

export default useUserData
