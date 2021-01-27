import axios from 'axios'

type LoginRequest ={
     username: string
     password: string
}

const USER_TOKEN = 'User token'

const axiosInstance = axios.create({
 baseURL: 'https://localhost:1234',
 headers: {'content-type': 'application/json'}
})

axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem(USER_TOKEN)
    return config
    }
)

export const login = (loginRequest: LoginRequest) => {
   return axiosInstance
   .post<string>('/auth/login', loginRequest)
   .then(resp => localStorage.setItem('UserToken', resp.data))
}
export const post = <T>(url : string, data: any) => (
    axiosInstance.post<T>(`/${url}`,data)
)
export const get = <T>(url : string ) => (
    axiosInstance.get<T>(`/${url}`)
)