import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVedio } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVedios = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailers = json.results.filter((video) => video.type === "Trailer");

    const trailer = trailers.length ? trailers[0] : json.results[0]; //if no trailers present
    dispatch(addTrailerVedio(trailer));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVedios();
  }, []);
};

export default useMovieTrailer;
