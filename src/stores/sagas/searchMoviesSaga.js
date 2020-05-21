import { call, put, takeLatest } from 'redux-saga/effects';
import { searchMoviesApi } from '../../apis/index';
import {
  SEARCH_MOVIES
} from '../../constants/index';
import {
  searchMoviesSuccess,
  searchMoviesError
} from '../actions/index'

function* workSearchMoviesSaga(action) {
  try {
    const response = yield call(searchMoviesApi, action.keySearch, action.page)
    yield put(searchMoviesSuccess(response.data))
  } catch (error) {
    yield put(searchMoviesError(error))
  }
}

function* watchSearchMoviesSaga() {
  yield takeLatest(SEARCH_MOVIES, workSearchMoviesSaga)
}

export default watchSearchMoviesSaga;