import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/LoginComponent';
import SignUp from '@/components/SignUp';
import HomeComponent from '@/components/HomeComponent';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/register', component: SignUp }
  ]
});

export default router;
