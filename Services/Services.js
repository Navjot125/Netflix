/* eslint-disable prettier/prettier */
import axios from 'axios';
const ApiUrl = 'https://api.themoviedb.org/3';
const ApiKey = 'api_key=1dd9ba208ec8c8cb88500bded3ad750c';
// Get Popular Movies

export const GetPopularMovie = async () => {
  const res = await axios.get(`${ApiUrl}/movie/popular?${ApiKey}`);
  // console.log(JSON.stringify(res.data.results[1],null, 2));
  return res.data.results;
};
// Get Upcoming Movies
export const GetUpcomingMovie = async () => {
  const res = await axios.get(`${ApiUrl}/movie/upcoming?${ApiKey}`);
  return res.data.results;
};
// Get Popular Tv
export const GetPopularTv = async () => {
  const res = await axios.get(`${ApiUrl}/tv/popular?${ApiKey}`);
  return res.data.results;
};
export const GetFamilyMovies = async () => {
  const res = await axios.get(
    `${ApiUrl}/discover/movie?${ApiKey}&with_genres=10751 `,
  );
  return res.data.results;
};
export const GetMovie = async id => {
  const res = await axios.get(`${ApiUrl}/movie/${id}?${ApiKey}`);
  return res.data;
};
export const SearchMovieTv = async (query, type) => {
  const res = await axios.get(
    `${ApiUrl}/search/${type}?${ApiKey}&query=${query}`,
  );
  return res.data.results;
};


