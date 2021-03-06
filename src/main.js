import Vue from 'vue';
import App from './App.vue';
import './bootstrap.min.css';
import './index.css';
Vue.config.productionTip = false;

new Vue({
	render: function (h) {
		return h(App);
	},
}).$mount('#app');
