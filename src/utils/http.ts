import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 添加 CSRF Token
    const token = document.cookie.match('(^|;)\\s*XSRF-TOKEN\\s*=\\s*([^;]+)')?.pop() || ''
    if (token) {
      config.headers['X-XSRF-TOKEN'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          // 处理 CSRF 攻击
          console.error('可能存在 CSRF 攻击')
          break
        case 401:
          // 处理未授权访问
          console.error('未授权访问')
          break
      }
    }
    return Promise.reject(error)
  }
)

export default http