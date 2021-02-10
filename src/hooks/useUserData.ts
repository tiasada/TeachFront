/* eslint-disable no-unused-vars */
import jwtDecode from 'jwt-decode'
import { getData } from '../storage'

export enum Role {
  Teacher = 'Teacher',
  Student = 'Student',
  Parent = 'Parent',
  School = 'School'
}

// get from localStore
const useUserData = () => {
  const { token } = getData()
  console.log(token)
  return jwtDecode<{ role: Role }>(token)
}

export default useUserData
