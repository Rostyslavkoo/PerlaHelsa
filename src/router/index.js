import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'main-page',
		component: () => import('@/views/MainPage'),
	},
];
const router = new VueRouter({
	mode: 'history',
	routes,
});
Vue.use(VueRouter);

export default router;
