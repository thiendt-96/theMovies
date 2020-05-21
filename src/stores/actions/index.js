import {
  GET_LIST_MOVIES,
  GET_LIST_MOVIES_ERROR,
  GET_LIST_MOVIES_SUCCESS,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR,
  PLAY_VIDEO,
  CLOSE_VIDEO,
} from "../../constants/index";

export const getListMovies = (page) => {
  return {
    type: GET_LIST_MOVIES,
    page,
  };
};

export const getListMoviesSuccess = (data) => {
  return {
    type: GET_LIST_MOVIES_SUCCESS,
    data,
  };
};

export const getListMoviesError = (errors) => {
  return {
    type: GET_LIST_MOVIES_ERROR,
    errors,
  };
};

export const searchMovies = (keySearch, page) => {
  return {
    type: SEARCH_MOVIES,
    keySearch,
    page,
  };
};

export const searchMoviesSuccess = (data) => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    data,
  };
};

export const searchMoviesError = (errors) => {
  return {
    type: SEARCH_MOVIES_ERROR,
    errors,
  };
};

export const getMovieDetails = (id) => {
  return {
    type: GET_MOVIE_DETAILS,
    id,
  };
};

export const getMovieDetailsSuccess = (data) => {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    data,
  };
};

export const getMovieDetailsError = (errors) => {
  return {
    type: GET_MOVIE_DETAILS_ERROR,
    errors,
  };
};

export const playVideo = (id) => {
  return {
    type: PLAY_VIDEO,
    id,
  };
};

export const CloseVideo = () => {
  return {
    type: CLOSE_VIDEO,
  };
};
