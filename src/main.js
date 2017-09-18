import Vue from 'vue';
import router from './router/router.js';
import App from './components/app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import '../src/sass/main.sass';

Vue.config.debug = true;
Vue.use(ElementUI)

var VueApp = new Vue({
	el: '#app',
	router: router,
	data: {
		message: "Hello Vue"
	},
	created: function() {

	},
	mounted: function() { 
		// 加載 D3 之類的 Library
	}
	// render: h => h(App)
})