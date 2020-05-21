import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";
import searchMoviesReducer from "./searchMoviesReducer";
import getMovieDetailsReducer from "./getMovieDetailsReducer";

const rootReducer = combineReducers({
  getMoviesReducer,
  searchMoviesReducer,
  getMovieDetailsReducer,
});

export default rootReducer;
