import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/app.vue';
import About from '../components/about.vue';

import DesignTickle from '../components/design-tickle.vue';
import DesignIOS from '../components/design-ios.vue';
import DesignElement from '../components/design-element.vue';
import DesignWeb from '../components/design-web.vue';

export default new Router({ 
    // mode: 'history', 
    // scrollBehavior (to, from, savedPosition) {
    //     console.log(to, from);
    //     if (savedPosition) {
    //         console.log(savedPosition);
    //         return savedPosition
    //     }
    // },
    routes: [
        { 	
            path: '/about', 
            name: 'about',
            component: About 
        },
        {   
            path: '/design-tickle', 
            name: 'design-tickle',
            component: DesignTickle 
        },
        {   
            path: '/design-element', 
            name: 'design-element',
            component: DesignElement 
        },
        {   
            path: '/design-ios',
            name: 'design-ios', 
            component: DesignIOS 
        },
        {   
            path: '/design-web', 
            name: 'design-web',
            component: DesignWeb 
        },
        { 
        	path: '/', 
            name: 'home',
        	component: App 
        },
        { 
            path: '*', 
            redirect: '/' 
        }
    ]
});

Vue.use(Router);