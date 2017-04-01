import Vue from 'vue'
import App from './app.vue'
import Router from 'vue-router'
import Vue_Resource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(Vue_Resource)
Vue.use(Router)

import Index from './views/index.vue'
import Left from './views/left.vue'
import Right from './views/right.vue'
import View from './views/view.vue'
import table from './components/table.vue'
import form from './components/form.vue'
import navigation from './components/navigation.vue'
import follow from './components/follow.vue'
import chart from './components/chart.vue'
import calendars from './components/calendars.vue'

const routes = [
 {
		path:'/',
		name:'index',
		component:Index,
		children:[
					{
					  path: '/view',
	                  name: 'view',
	                  component: View
					},
	                 {
					  path: '/table',
	                  name: 'table',
	                  component: table
					},
					{
					  path: '/chart',
	                  name: 'chart',
	                  component: chart
					},
					{
					  path: '/form',
	                  name: 'form',
	                  component: form
					},
					{
					  path: '/calendars',
	                  name: 'calendars',
	                  component: calendars
					},
					{
					  path: '/navigation',
	                  name: 'navigation',
	                  component: navigation
					},
					{
					  path: '/follow',
	                  name: 'follow',
	                  component: follow
					}
				]
	},
];

const router= new Router({
  	routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
