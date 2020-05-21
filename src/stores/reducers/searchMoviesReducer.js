import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR
} from '../../constants/index'

const nameInitialState = {
  page: 0,
  total_results: 0,
  total_pages: 0,
  movies: [],
  isSearchSuccess: false
}

const searchMoviesReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return state
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        page: action.data.page,
        total_pages: action.data.total_pages,
        total_results: action.data.total_results,
        movies: action.data.results,
        isSearchSuccess: true
      }
    case SEARCH_MOVIES_ERROR:
      return state
    default:
      return state
  }
}

export default searchMoviesReducer