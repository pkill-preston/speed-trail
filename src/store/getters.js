const getters = {
  getDriverPodium: (state) => {
    const podium = state.driverPodiumPositions[0].slice(0, 3);
    return podium;
  },
};

export default getters;
