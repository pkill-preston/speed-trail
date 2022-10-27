import instance from '@/services';

const actions = {
  getDriverStandings: async ({ commit }) => {
    let constructors = [];
    await instance.get('/constructors').then((response) => {
      constructors = [...response.data];
    });
    await instance.get('/drivers')
      .then((response) => {
        Object.entries(response.data).forEach((element) => {
          const team = element[1].team.split(' ')[0];
          const color = constructors.find((e) => e.scuderiaName.includes(team));
          Object.assign(element[1], { color: `${color.scuderiaColor}` });
        });
        commit('setDriverStandings', response.data);
      });
  },
  getConstructorStandings: ({ commit }) => {
    instance.get('/constructors')
      .then((response) => {
        Object.entries(response.data).forEach((element) => {
          const name = element[1].scuderiaName.split(' ')[0].toLowerCase();
          const folder = require.context(
            '@/assets/teams',
            true,
            /^.*\.png$/,
          );
          const scuderiaLogo = folder.keys().find((e) => e.includes(name));
          Object.assign(element[1], { scuderiaLogo: scuderiaLogo.slice(2) });
        });
        commit('setConstructorStandings', response.data);
      });
  },
};

export default actions;
