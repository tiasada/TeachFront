import axios from 'axios'
import { getData, store } from '/storage'

export type User = Student | Teacher | Parent

export type Student = {
  name: string
  cpf: string
  birthDate: string
  phoneNumber: string
  registration: string
  email?: string
  userid: string
  parentid?: string
  id: string
  parent: Parent
  classrooms: ClassroomRelation []
}

export type Parent = {
  name: string
  cpf: string
  birthDate: string
  phoneNumber: string
  registration: string
  email?: string
  id: string
  student: Student
}

export type Teacher = {
  name: string
  cpf: string
  birthDate: string
  phoneNumber: string
  email?: string
  userid: string
  classrooms?: ClassroomRelation []
  id: string
}

export type Presence = {
  studentid: string
  ispresent: boolean
  reason: string
}

export type ClassroomRelation = {
  classroom: Classroom
}

export type Classroom = {
  name: string
  subjects: string[]
  subjectsString: string
  students: Student[]
  teachers: Teacher[]
  grades: Grades[]
  classDays: string[]
  id: string
}
export type Grades = {
  day: string
  student: string
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
  return post<string>(`${registerRequest.role}s`, registerRequest)
}

export const createclassrom = (createClassroom: CreateClassroomRequest) => {
  return post<string>('classrooms', createClassroom)
}
export const getclassrooms = () => {
  return get<Classroom[]>('/classrooms')
}
export const getStudentsByClassroom = (id: string, params?: object) => {
  return get<Student[]>(`classrooms/${id}/students`, { params })
}
export const getTeachersByClassroom = (id: string, params?: object) => {
  return get<Teacher[]>(`classrooms/${id}/teachers`, { params })
}
export const getclassroom = (id: string) => {
  return get<Classroom>(`classrooms/${id}`)
}
export const addStudent = (studentId: string, classroomId: string) => {
  return post<string>(`classrooms/${classroomId}/students`, { id: studentId })
}
export const addTeacher = (teacherId: string, classroomId: string) => {
  return post<string>(`classrooms/${classroomId}/teachers`, { id: teacherId })
}

export const post = <T>(url: string, data: any) => (
  axiosInstance.post<T>(`/${url}`, data)
)
export const get = <T>(url: string, params?: object) => (
  axiosInstance.get<T>(`/${url}`, { params })
)
