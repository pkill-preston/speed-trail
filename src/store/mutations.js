const mutations = {
  setPodiumPositions: (state) => {
    state.driverPodiumPositions = [];
    const drivers = state.driverStandings;
    state.driverPodiumPositions.push(drivers);
    state.driverPodiumPositions.forEach((element) => {
      if (element.position <= 1) {
        Object.assign(element, { size: 'big' });
      } else {
        Object.assign(element, { size: 'small' });
      }
    });
  },
  setDriverStandings: (state, driverStandings) => {
    state.driverStandings = [];
    state.driverStandings.push(...driverStandings);
  },
  setConstructorStandings: (state, constructorStandings) => {
    state.constructorStandings = [];
    state.constructorStandings.push(...constructorStandings);
  },
};

export default mutations;
