import {IMG_CDN_URL} from "../utlis/constants";

const MovieCard = ({posterPath}) => {

  return (
       <img 
            className="pr-4 w-44"
            alt="movie-list-img"
            src = {IMG_CDN_URL + posterPath} 
        />
  )
}

export default MovieCard