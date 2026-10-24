import { createRouter, createWebHistory } from 'vue-router'
import AppShell from '@/features/AppShell.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppShell,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/features/00-home/HomeView.vue'),
        },
        {
          path: 'about-us',
          name: 'about-us',
          component: () => import('@/features/01-about-us/AboutUsView.vue'),
        },
        {
          path: 'academic-programs',
          name: 'academic-programs',
          component: () => import('@/features/02-academic-programs/AcademicProgramsView.vue'),
        },
        {
          path: 'faculty-and-staff',
          name: 'faculty-and-staff',
          component: () => import('@/features/03-faculty-and-staff/FacultyStaffView.vue'),
        },
        {
          path: 'event-calendar',
          name: 'event-calendar',
          component: () => import('@/features/04-event-calendar/EventCalendarView.vue'),
        },
        {
          path: 'contact-us',
          name: 'contact-us',
          component: () => import('@/features/05-contact-us/ContactUsView.vue'),
        },
      ],
    },
  ],

  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, behavior: 'smooth' }
  },
})

export default router
