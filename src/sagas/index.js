import {
  delay,
  all,
  call,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  getPopularMovies,
  fetchedPopularMovies,
  getNowPlayingMovies,
  fetchedNowPlayingMovies,
  getTopRatedMovies,
  fetchedTopRatedMovies,
  getUpcomingMovies,
  fetchedUpcomingMovies,
  getSearchMovies,
  fetchedSearchMovies,
} from "../redux/movies";
import { API_KEY } from "../config";
import TheMovieDbApi from "../lib/api";
import { fetchedGenres, getGenres } from "../redux/genres";
import { getMovie, fetchedMovie } from "../redux/movie";

const api = new TheMovieDbApi(API_KEY);

function* fetchGenres() {
  yield put(fetchedGenres(yield call(api.getGenres)));
}

function* fetchPopularMovies(action) {
  yield put(
    fetchedPopularMovies(yield call(api.getPopularMovies, action.payload))
  );
}

function* fetchNowPlayingMovies(action) {
  yield put(
    fetchedNowPlayingMovies(yield call(api.getNowPlayingMovies, action.payload))
  );
}

function* fetchTopRatedMovies(action) {
  yield put(
    fetchedTopRatedMovies(yield call(api.getTopRatedMovies, action.payload))
  );
}

function* fetchUpcomingMovies(action) {
  yield put(
    fetchedUpcomingMovies(yield call(api.getUpcomingMovies, action.payload))
  );
}

function* fetchSearchMovies(action) {
  yield put(
    fetchedSearchMovies(yield call(api.getSearchMovies, action.payload))
  );
}

function* fetchMovie(action) {
  yield put(fetchedMovie(yield call(api.getMovie, action.payload)));
}

export default function* watcherSaga() {
  yield all([
    yield takeEvery(getMovie.type, fetchMovie),
    yield takeEvery(getPopularMovies.type, fetchPopularMovies),
    yield takeEvery(getNowPlayingMovies.type, fetchNowPlayingMovies),
    yield takeEvery(getTopRatedMovies.type, fetchTopRatedMovies),
    yield takeEvery(getUpcomingMovies.type, fetchUpcomingMovies),
    yield takeEvery(getGenres.type, fetchGenres),
    yield takeEvery(getSearchMovies.type, fetchSearchMovies),
  ]);
}
