import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function page (path) {
    return () => import(/* webpackChunkName: '' */ `./pages/${path}`).then(m => m.default || m)
}
export default new Router({
    mode: 'history',
    routes: [
        { path: '/',
        component: page('B2C/Index.vue'),
        children: [
            { path: '', redirect: { name: 'b2c.funnel.leads' }},
            { path: 'b2c/funnel/leads', name: 'b2c.funnel.leads', component: page('B2C/Funnel/Leads.vue') },
        ] },
    ]
})