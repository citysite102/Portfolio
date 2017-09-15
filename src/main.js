import Vue from 'vue'
import App from './app.vue'
import '../src/sass/main.sass'


new Vue({
	el: '#app',
	components: {App},
	data: {
		message: "Hello Vue"
	}
})