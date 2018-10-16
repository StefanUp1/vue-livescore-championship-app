import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Table from './components/Table.vue'
import Fixtures from './components/Fixtures/Fixtures.vue'
import Today from './components/Today.vue'
import SingleFixture from './components/Fixtures/SingleFixture.vue'
import Lineups from './components/Fixtures/Stats/Lineups.vue'
import Stats from './components/Fixtures/Stats/Stats.vue'
import Goalscorers from './components/Fixtures/Stats/Goalscorers.vue'

const routes = [
  {
    path: '/',
    component: Table,
    name: 'table'
  },
  {
    path: '/fixtures',
    component: Fixtures,
    name: 'fixtures'
  },
  {
    path: '/today',
    component: Today,
    name: 'today'
  },
  {
    path: '/singleFixture',
    component: SingleFixture,
    children: [
      {
        path: '',
        component: Lineups,
        name: 'singleFixture'
      },
      {
        path: 'stats',
        component: Stats,
        name: 'stats'
      },
      {
        path: 'goalscorers',
        component: Goalscorers,
        name: 'goalscorers'
      }
    ]
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
