import { GET_MOVIE_DETAILS } from "../../constants/index";
import { call, takeLatest, put } from "redux-saga/effects";
import { getMovieDetailsApi } from "../../apis/index";
import { getMovieDetailsSuccess, getMovieDetailsError } from "../actions/index";

function* workGetMovieDetailSaga(action) {
  try {
    const response = yield call(getMovieDetailsApi, action.id);
    const { data } = response
    yield put(getMovieDetailsSuccess(data));
  } catch (error) {
    yield put(getMovieDetailsError(error));
  }
}

function* watchGetMovieDetailsSaga() {
  yield takeLatest(GET_MOVIE_DETAILS, workGetMovieDetailSaga);
}

export default watchGetMovieDetailsSaga;
