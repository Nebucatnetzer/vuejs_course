import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import UsersList from './components/users/UsersList';

const app = createApp(App);

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
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

app.use(router);
app.mount('#app');

if (module.hot) {
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
