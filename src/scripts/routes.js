import Home from './components/home/Home.vue';
import Projects from './components/projects/Projects.vue';
import About from './components/about/About.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/home', redirect: '/'},
    { path: '/projects', component: Projects },
    { path: '/about', component: About}
];