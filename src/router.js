import Vue from 'vue'
import Router from 'vue-router'
import Contact from './components/Contact.vue'
import Main from './components/Main.vue'
import Equipment from './components/Equipment.vue'
import Amenites from './components/Amenites.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/equipment', name: 'Equipment', component: Equipment },
    { path: '/amenites', name: 'Amenites', component: Amenites },
    { path: '/contact', name: 'Contact', component: Contact },
  ]

})
