import { createStore } from 'vuex';

import coachesMoudule from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesMoudule
    }
})

export default store;