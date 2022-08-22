import instance from '@/services';

const actions = {
  getDriverStandings: ({ commit }) => {
    instance.get('/rankings/drivers', { params: { season: '2022' } })
      .then((response) => {
        commit('setPodiumPositions', response.data.response);
      });
  },
};

export default actions;
