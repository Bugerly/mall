import axios from 'axios'

export function request(config){
  //1创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2拦截器
  instance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log(error);
  })
  instance.interceptors.response.use(result=>{
    return result.data
  },error => {
    console.log(error)
  })

  //3发送请求
  return instance(config)
}

