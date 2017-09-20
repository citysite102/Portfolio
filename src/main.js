import Vue from 'vue';
import router from './router/router.js';
import ElementUI from 'element-ui';
import ScrollTrigger from 'scrolltrigger-classes'
import 'element-ui/lib/theme-default/index.css';
	
Vue.config.debug = true;
Vue.use(ElementUI)

var VueApp = new Vue({
	el: '#app',
	router: router,
	data: {
		message: "Hello Vue"
	},
	mounted: function() { 
		// 加載 D3 之類的 Library
	}
	// render: h => h(App)
})