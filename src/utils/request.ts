import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ApiResponse } from '@/types'
import { message } from 'ant-design-vue'

// Create axios instance
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Add loading state here if needed
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const { data } = response
    
    // Handle successful response
    if (data.code === 200) {
      return data
    }
    
    // Handle business error
    message.error(data.message || 'Request failed')
    return Promise.reject(new Error(data.message || 'Request failed'))
  },
  (error) => {
    // Handle HTTP error
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message.error('Unauthorized, please login again')
          // Redirect to login page
          window.location.href = '/login'
          break
        case 403:
          message.error('Permission denied')
          break
        case 404:
          message.error('Resource not found')
          break
        case 500:
          message.error('Server error')
          break
        default:
          message.error('Network error')
      }
    } else if (error.request) {
      // No response received
      message.error('Network error, please check your connection')
    } else {
      // Error in request setup
      message.error('Request setup error')
    }
    
    return Promise.reject(error)
  }
)

// HTTP request methods
export const request = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.get(url, config)
  },

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.post(url, data, config)
  },

  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.put(url, data, config)
  },

  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.delete(url, config)
  },

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return instance.patch(url, data, config)
  },
}

export default instance