import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
	children: [
		{
			path: '',
			name: 'find_music',
			component: () => import('../views/find_music.vue')
		},
		{
			path: 'podcast',
			name: 'podcast',
			component: () => import('../views/podcast.vue')
		},
		{
			path: 'video',
			name: 'video',
			component: () => import('../views/video.vue')
		},
		{
			path: 'friends',
			name: 'friends',
			component: () => import('../views/friends.vue')
		},
		{
			path: 'secretfm',
			name: 'secretfm',
			component: () => import('../views/secretfm.vue')
		}
	]
  }
]

const router = new VueRouter({
  routes
})

export default router
