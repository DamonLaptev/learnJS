import { topMovies } from "./moduleB.js";

const checkMovie = (movieName) => {
  topMovies.includes(movieName) ? console.log(true) : console.log(false);
};

export { checkMovie };
