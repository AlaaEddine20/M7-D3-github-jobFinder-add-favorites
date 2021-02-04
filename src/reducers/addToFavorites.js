export default function addFavorites(state = {}, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state.favorites,
        jobs: state.jobs.concat(action.payload),
      };

    default:
      return state;
  }
}
