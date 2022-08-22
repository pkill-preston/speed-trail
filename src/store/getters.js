const getters = {
  getDriverPodium: (state) => {
    state.podiumPositions.slice(0, 3);
  },
};

export default getters;
