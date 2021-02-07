import axios from 'axios'

export type Student = {
  name: string
  cpf: string
  phonenumber: string
  registration: string
  userid: string
  parentid?: string
}
export type Teacher = {
  name: string
  cpf: string
  phonenumber: string
  birthDate: string
  ermail?: string
  userid: string
  classrooms?: Classroom []
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

const USER_TOKEN = 'UserToken'
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
  config.headers.Authorization = `Bearer ${localStorage.getItem(USER_TOKEN)}`
  return config
}
)

export const login = (loginRequest: LoginRequest) => {
  return axiosInstance
    .post<LoginResponse>('/auth/login', loginRequest)
    .then(resp => {
      localStorage.setItem('UserToken', resp.data.token)
      localStorage.setItem('UserProfile', resp.data.profile)
    })
}

export const register = (registerRequest: RegisterRequest) => axiosInstance.post<string>(`/${registerRequest.role}s`, registerRequest)

export const createclassrom = (createClassroom: CreateClassroomRequest) => {
  return axiosInstance
    .post<string>('/classrooms', createClassroom)
}
export const getclassrooms = () => {
  return axiosInstance
    .get<Classroom[]>('/classrooms')
}
export const getStudents = () => {
  return axiosInstance
    .get<Student[]>('/students')
}
export const getclassroom = (id: string) => {
  return axiosInstance
    .get<Classroom>('/classrooms')
}

export const post = <T>(url: string, data: any) => (
  axiosInstance.post<T>(`/${url}`, data)
)
export const get = <T>(url: string, params?: object) => (
  axiosInstance.get<T>(`/${url}`, { params })
)
