const getters = {
  getDriverPodium: (state) => {
    state.podiumPositions.slice(0, 3);
    console.log(state.podiumPositions);
  },
};

export default getters;
