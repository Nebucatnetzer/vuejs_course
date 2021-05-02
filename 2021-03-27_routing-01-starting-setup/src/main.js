import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
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
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
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

router.beforeEach(function(to, from, next) {
  console.log(to, from);
  //   if (to.name === 'team-members') {
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
  next();
});
const app = createApp(App);
app.use(router);
app.mount('#app');

if (module.hot) {
  0;
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
