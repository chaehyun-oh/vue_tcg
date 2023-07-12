import { createStore } from 'vuex';

import coachesMoudule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesMoudule
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
})

export default store;