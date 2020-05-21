import {
  GET_LIST_MOVIES,
  GET_LIST_MOVIES_ERROR,
  GET_LIST_MOVIES_SUCCESS,
} from '../../constants/index'

const nameInitialState = {
  page: 0,
  total_results: 0,
  total_pages: 0,
  movies: []
}
const getMoviesReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case GET_LIST_MOVIES:
      return state
    case GET_LIST_MOVIES_SUCCESS:
      return {
        ...state,
        page: action.data.page,
        total_pages: action.data.total_pages,
        total_results: action.data.total_results,
        movies: action.data.results
      }
    case GET_LIST_MOVIES_ERROR:
      return state
    default:
      return state
  }
}

export default getMoviesReducer;