import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/550?api_key=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/550?api_key=${APIKey}&s=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};