import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: null
	},
	mutations: {
		userInfo (state, payload) {
			state.userInfo = payload
		}
	},
	actions: {
		getUserInfo (content,options) {
			console.log(content)
			axios({
				url: '/login/cellphone',
				data: {
					phone: options.phone,
					password: options.password
				}
			}).then(res => {
				console.log(res)
				content.commit('userInfo',res.profile)
			})
		}
	},
	modules: {}
})
