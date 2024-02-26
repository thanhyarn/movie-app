import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  hasMore: false,
  totalResults: 0,
  page: 0,
  totalPages: 0,
  isFetching: false,
};

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    getPopularMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchedPopularMovies: (state, action) => {
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        hasMore: action.payload.page < action.payload.total_pages,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        isFetching: false,
      };
    },

    // Now Playing
    getNowPlayingMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },

    fetchedNowPlayingMovies: (state, action) => {
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        hasMore: action.payload.page < action.payload.total_pages,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        isFetching: false,
      };
    },

    // Top Rated
    getTopRatedMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchedTopRatedMovies: (state, action) => {
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        hasMore: action.payload.page < action.payload.total_pages,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        isFetching: false,
      };
    },

    // Upcominmg

    getUpcomingMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchedUpcomingMovies: (state, action) => {
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        hasMore: action.payload.page < action.payload.total_pages,
        totalResults: action.payload.total_results,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        isFetching: false,
      };
    },

    resetState: (state) => {
      return initialState;
    },
  },
});

export const {
  getPopularMovies,
  fetchedPopularMovies,
  getNowPlayingMovies,
  fetchedNowPlayingMovies,
  getTopRatedMovies,
  fetchedTopRatedMovies,
  getUpcomingMovies,
  fetchedUpcomingMovies,
  resetState,
} = moviesSlice.actions;

export default moviesSlice.reducer;
