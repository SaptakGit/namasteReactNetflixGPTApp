import {IMG_CDN_URL, NO_IMAGE_FOUND} from "../utlis/constants";

const MovieCard = ({posterPath}) => {
  
  return (
       <img 
            className="pr-4 w-44"
            alt="movie-list-img"
            src = {posterPath ? IMG_CDN_URL + posterPath : NO_IMAGE_FOUND} 
        />
  )
}

export default MovieCard 