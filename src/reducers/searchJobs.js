export default function addFavorites(state = {}, action) {
  switch (action.type) {
    case "SEARCH_RESULTS":
      return {
        ...state,
        isLoading: true,
      };
    case "GOT_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
