import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favoritesReducer from "../reducers/addToFavorites";
import jobsReducer from "../reducers/searchJobs";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  favorites: {
    jobs: [],
  },
  jobs: {
    searchResults: [],
  },
};
// every sub-reducer is triggered at any action dispatched2e
const mainReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

export default function configureStore() {
  return createStore(
    mainReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
