import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import router from './router';

// Icons
import cartIcon from "@/components/icons/cart-icon";
import serachIcon from "@/components/icons/search-icon";
import userIcon from "@/components/icons/user-icon";
import arrowIcon from "@/components/icons/arrow-icon";
import phoneIcon from "@/components/icons/phone-icon";
import arrowDownIcon from "@/components/icons/arrow-down-icon";

Vue.component('cart-icon', cartIcon);
Vue.component('search-icon', serachIcon);
Vue.component('user-icon', userIcon);
Vue.component('arrow-icon', arrowIcon);
Vue.component('phone-icon', phoneIcon);
Vue.component('arrow-down-icon', arrowDownIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
