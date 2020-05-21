import {
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR,
  PLAY_VIDEO,
  CLOSE_VIDEO,
} from "../../constants/index";

const nameInitialState = {
  movieDetails: {},
  playVideo: false,
  idVideo: "",
};

const getMovieDetailsReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return state;
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.data,
      };
    case GET_MOVIE_DETAILS_ERROR:
      return state;
    case PLAY_VIDEO:
      return {
        ...state,
        playVideo: true,
        idVideo: action.id,
      };
    case CLOSE_VIDEO:
      return {
        ...state,
        playVideo: false,
      };
    default:
      return state;
  }
};

export default getMovieDetailsReducer;
