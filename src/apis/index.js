import { API_END_POINT, API_KEY } from "../constants/apis";
import axios from "axios";

const language = "en-US";
const intance = axios.create({
  baseURL: API_END_POINT,
});

export const getListMoviesApi = (page) => {
  const curentPage = page > 1 ? page : 1;
  return intance.get(`/movie/popular?&api_key=${API_KEY}&language=${language}&page=${curentPage}`);
};

export const searchMoviesApi = (keySearch, page) => {
  const curentPage = page > 1 ? page : 1;
  return intance.get(`/search/movie?api_key=${API_KEY}&language=${language}&query=${keySearch}&page=${curentPage}`);
};

export const getMovieDetailsApi = (id) => {
  return intance.get(`/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits&language=${language}`);
};
