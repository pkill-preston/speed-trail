import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

import actions from '@/store/actions';
import mutations from '@/store/mutations';
import getters from '@/store/getters';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default createStore({
  state: {
    complement: ['st', 'nd', 'rd'],
    driverPodiumPositions: [],
    driverStandings: [],
    constructorStandings: [],
  },
  getters,
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
});
