import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    podiumPositions: [],
  },
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
});
