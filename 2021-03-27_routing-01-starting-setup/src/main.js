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
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers }
  ]
});

app.use(router);
app.mount('#app');

if (module.hot) {
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
