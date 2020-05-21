import { call, put, takeLatest } from "redux-saga/effects";
import { getListMoviesApi } from "../../apis/index";
import { GET_LIST_MOVIES } from "../../constants/index";
import { getListMoviesError, getListMoviesSuccess } from "../actions/index";

function* workGetListMoviesSaga(action) {
  try {
    const response = yield call(getListMoviesApi, action.page);
    yield put(getListMoviesSuccess(response.data));
  } catch (error) {
    yield put(getListMoviesError());
  }
}

function* watchGetListMoviesSaga() {
  yield takeLatest(GET_LIST_MOVIES, workGetListMoviesSaga);
}

export default watchGetListMoviesSaga;
