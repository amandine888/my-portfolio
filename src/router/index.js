import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/AppHome.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/mes-projets', 
    name: 'Project',
    component: Projects
  },

  {
    path: '/bio', 
    name: 'About', 
    component: About
  }, 

  {
    path: '/contact', 
    name: 'Contact', 
    component: Contact
  }

  // {
  //   path: '/test',
  //   name: 'Test',
  //   // route level code-splitting
  //   // this generates a separate chunk (test.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../components/FirstComponent.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
