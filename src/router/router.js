import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/app.vue';
import About from '../components/about.vue';

Vue.use(Router);
export default new Router({  
  routes: [
    { 	
    	path: '/about', 
    	component: About 
    },
    { 
    	path: '/', 
    	component: App 
    },
    { 
        path: '*', 
        redirect: '/' 
    }
  ],
});
