import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import UsersList from './components/users/UsersList';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TeamsList },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true
      },
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
          query: { sort: 'asc' }
        }
      ]
    },
    { path: '/users', component: UsersList }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, _2, next) {
  if (to.meta.needsAuth) {
    console.log('Needs authentication.');
  }
  //   if (to.name === 'team-members') {
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
  next();
});

export default router;
