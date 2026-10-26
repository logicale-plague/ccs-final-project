import { createRouter, createWebHistory } from 'vue-router'
import AppShell from '@/features/AppShell.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppShell,
      redirect: { name: 'home' },
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
          path: 'about-us/history',
          name: 'about-history',
          component: () => import('@/features/01-about-us/HistoryView.vue'),
        },
        {
          path: 'about-us/vision-and-mission',
          name: 'about-vision-and-mission',
          component: () => import('@/features/01-about-us/VisionAndMission.vue'),
        },
        {
          path: 'about-us/message-of-the-dean',
          name: 'about-message-of-the-dean',
          component: () => import('@/features/01-about-us/MessageOfTheDean.vue'),
        },
        {
          path: 'about-us/linkages',
          name: 'about-linkages',
          component: () => import('@/features/01-about-us/Linkages.vue'),
        },
        {
          path: 'about-us/news-and-updates',
          name: 'about-news-and-updates',
          component: () => import('@/features/01-about-us/NewsAndUpdates.vue'),
        },
        {
          path: 'academic-programs',
          name: 'academic-programs',
          component: () => import('@/features/02-academic-programs/AcademicProgramsView.vue'),
        },
        {
          path: 'academic-programs/computer-science',
          name: 'comp-sci',
          component: () => import('@/features/02-academic-programs/programs/ComputerScience.vue'),
        },
        {
          path: 'academic-programs/information-technology',
          name: 'info-tech',
          component: () => import('@/features/02-academic-programs/programs/InformationTech.vue'),
        },
        {
          path: 'academic-programs/digital-media-arts',
          name: 'media-arts',
          component: () => import('@/features/02-academic-programs/programs/DigitalMediaArts.vue'),
        },
        {
          path: 'academic-programs/library-information-science',
          name: 'lib-sci',
          component: () => import('@/features/02-academic-programs/programs/LibraryScience.vue'),
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

/**
 * Navigates to a named location
 * @param {String} routeName
 */
export function navigateTo(routeName) {
  router.push({ name: routeName })
}
