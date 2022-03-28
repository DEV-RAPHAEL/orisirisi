
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue'),
        name: 'Home'
       },
      { path: '/about', component: () => import('pages/PageAbout.vue'),
        name: 'About'
      },
      { path: '/chat', component: () => import('pages/PageChat.vue'),
       name: 'Chat'
       },
      { path: '/todo', component: () => import('pages/PageTodo.vue'),
        name: 'Todo'
       },
      { path: '/projects', component: () => import('pages/PageProjects.vue'),
        name: 'Projects'
       },
      { path: '/contacts', component: () => import('pages/PageContact.vue'),
        name: 'Contacts'
       },
      { path: '/groups', component: () => import('pages/PageGroups.vue'),
        name: 'Groups'
       },
      { path: '/profiles', component: () => import('pages/PageProfile.vue'),
        name: 'Profiles'
       }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
