const mutations = {
  setPodiumPositions: (state, podiumPositions) => {
    state.podiumPositions = [];
    state.podiumPositions.push(...podiumPositions.slice(0, 3));
    state.podiumPositions.forEach((element) => {
      if (element.position <= 1) {
        Object.assign(element, { size: 'big' });
      } else {
        Object.assign(element, { size: 'small' });
      }
    });
  },
};

export default mutations;
