import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home')
        },
        /* Games routes */
        {
            path: '/games',
            meta: {title: 'Games'},
            component: () => import('@/views/Games')
        },
        {
            path: '/games/dungeon',
            name: 'dungeon',
            meta: {title: 'Dungeon'}
        },
        {
            path: '/games/cafde',
            name: 'cafde',
            meta: {title: 'Cafde\'s Quest for Satisfaction'}
        },
        {
            path: '/games/sonichighschool',
            name: 'sonichs',
            meta: {title: 'Sonic High School'}
        },
        {
            path: '/games/cafdehd',
            name: 'cafdehd',
            meta: {title: 'Cafde\'s Quest for Satisfaction 1.5 HD REMIX'}
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Kaztalek';
    next();
})

export default router;
