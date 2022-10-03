import instance from '@/services';

const actions = {
  getDriverStandings: ({ commit }) => {
    instance.get('/races', { params: { type: 'race', season: '2022' } })
      .then((response) => {
        console.log(response.data);
        commit('setPodiumPositions', response.data);
      });
  },
};

export default actions;
