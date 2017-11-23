import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/app.vue';
import About from '../components/about.vue';

import DesignTickle from '../components/design-tickle.vue';
import DesignIOS from '../components/design-ios.vue';
import DesignElement from '../components/design-element.vue';
import DesignWeb from '../components/design-web.vue';



Vue.use(Router);
export default new Router({  
  routes: [
    { 	
    	path: '/about', 
    	component: About 
    },
    {   
        path: '/design-tickle', 
        component: DesignTickle 
    },
    {   
        path: '/design-element', 
        component: DesignElement 
    },
    {   
        path: '/design-ios', 
        component: DesignIOS 
    },
    {   
        path: '/design-web', 
        component: DesignWeb 
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
