import axios from "axios"
import store from "../store"

//创建axios实例
const service = axios.create({
	//设置默认的基础路径
	// baseURL: 'https://www.mvi-web.cn/api',
	baseURL: 'http://localhost:3000',
	//请求超时时间，设为15s
	timeout: 15000,
	//响应数据格式
	responseType: 'json',
	//默认请求方式
	method: 'POST'
})

//添加请求拦截器，在这里进行请求发送前的一些处理，比如加载动画、数据转换
service.interceptors.request.use(config => {
	//执行加载动画
	// store.state.vm.$showToast({
	// 	type:'loading',
	// 	message:'加载中...'
	// })
	//在这里可以添加一些信息，比如说token
	if(store.state.token){
		config.headers['authorization'] = store.state.token
	}
	return config
},error=>{
	//错误提示
	// store.state.vm.$Alert(error.message)
})

//添加响应拦截器，在这里对服务器返回的数据进行处理
service.interceptors.response.use(response=>{
	//隐藏加载动画
	// store.state.vm.$hideToast();
	//返回数据
	return response.data;
},error=>{
	//隐藏加载动画
	// store.state.vm.$hideToast();
	//错误提示
	// store.state.vm.$Alert(error.message)
})

export default service
