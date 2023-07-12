import { createRouter, createWebHistory } from 'vue-router';

import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegister from './pages/coaches/CoachesRegister.vue';
import ContactCoache from './pages/requests/ContactCoache.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachesDetail,
            props: true,
            children: [
                { path: 'contact', component: ContactCoache },
            ]
        },
        { path: '/register', component: CoachesRegister },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },


    ],
});

export default router;