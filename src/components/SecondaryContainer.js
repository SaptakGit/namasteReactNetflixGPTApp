import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  //console.log(movies.popularMovies);
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
      {/*
        MovieList - Popular
          MovieCar * n
        MovieList - Trendin
        MovieList - NowPlayig
        MovieList - Genere

      */}
      
    </div>)
  )
}

export default SecondaryContainer