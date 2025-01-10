import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import ProjectDetail from '@/views/ProjectDetail.vue';
import QRCodeGenerator from '@/components/QRCodeGenerator.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/qr',
    name: 'QR generator',
    component: QRCodeGenerator
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
