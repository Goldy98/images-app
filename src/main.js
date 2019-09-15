import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import 'semantic-ui-css/semantic.min.css';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImagesList from "./components/ImagesList";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);
export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback',component: AuthHandler },
        { path: '/',component: ImagesList },
        { path: '/upload',component: UploadForm },
    ]
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');