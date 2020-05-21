import watchGetListMoviesSaga from "./getListMoviesSaga";
import watchSearchMoviesSaga from "./searchMoviesSaga";
import watchGetMovieDetailsSaga from "./getMovieDetailsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchGetListMoviesSaga(),
    watchSearchMoviesSaga(),
    watchGetMovieDetailsSaga(),
  ]);
}
