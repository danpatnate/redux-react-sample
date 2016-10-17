const challenges = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHALLENGES':
      return action.challenges;
    case 'CREATE_CHALLENGE':
      return action.challenges;
    case 'UPDATE_CHALLENGE':
      return action.challenges;
    default:
      return state;
  }
};

export default challenges;
