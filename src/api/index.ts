import axios from 'axios'
import { getData, store } from '/storage'

export type Student = {
  name: string
  cpf: string
  phonenumber: string
  registration: string
  userid: string
  parentid?: string
  id: string
}
export type Teacher = {
  name: string
  cpf: string
  phonenumber: string
  birthDate: string
  ermail?: string
  userid: string
  classrooms?: Classroom []
  id: string
}
export type Classroom = {
  name: string
  subjects: string[]
  subjectsString: string
  students: string[]
  teachers: string[]
  grades: string[]
  classDays: string[]
  id: string
}

type LoginRequest = {
  username: string
  password: string
}
type RegisterRequest = {

  name: string
  cpf: string
  phonenumber: string
  birthdate: string
  registration?: string
  role: string

}
type LoginResponse = {
  token: string
  profile: string
}

type CreateClassroomRequest = {
  name: string
}

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001',
  headers: { 'content-type': 'application/json' }
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getData().token}`
  return config
}
)

export const login = (loginRequest: LoginRequest) => {
  return axiosInstance
    .post<LoginResponse>('/auth/login', loginRequest)
    .then(resp => {
      store({ token: resp.data.token })
    })
}

export const register = (registerRequest: RegisterRequest) => {
  return post<string>(`/${registerRequest.role}s`, registerRequest)
}

export const createclassrom = (createClassroom: CreateClassroomRequest) => {
  return post<string>('/classrooms', createClassroom)
}
export const getclassrooms = () => {
  return get<Classroom[]>('/classrooms')
}
export const getStudentsByClassroom = (id: string, params?: object) => {
  return axiosInstance.get<Student[]>(`/classrooms/${id}/students`, { params })
}
export const getclassroom = (id: string) => {
  return get<Classroom>(`/classrooms/${id}`)
}
export const addStudent = (studentId: string, classroomId: string) => {
  return axiosInstance.post<string>(`/classrooms/${classroomId}/students`, { id: studentId })
}

export const post = <T>(url: string, data: any) => (
  axiosInstance.post<T>(`/${url}`, data)
)
export const get = <T>(url: string, params?: object) => (
  axiosInstance.get<T>(`/${url}`, { params })
)
