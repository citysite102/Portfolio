import Vue from 'vue';
import VueRouter from 'vue-router';
import '../src/sass/main.sass';

// init
Vue.use(VueRouter);
Vue.config.debug = true;


// // pages
import App from './components/app.vue';
import About from './components/about.vue';

// var App = Vue.extend({});
var router = new VueRouter({
  routes: [
    { path: '/about', component: About },
    { path: '/', component: App }
  ],
});

// router.start(App, '#app')
// router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    // '*':"/index"//重定向任意未匹配路径到/index
// });


new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	data: {
		message: "Hello Vue"
	}
})