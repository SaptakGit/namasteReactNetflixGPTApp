import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utlis/moviesSlice";
import { API_OPTIONS } from "../utlis/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        const filterData = json.results.filter(video =>video.type === "Trailer")
        const tralier = filterData.length ? filterData[0] : json.results[0];
        //console.log(tralier);
        dispatch(addTrailerVideo(tralier))
    };

    useEffect(() =>{
        getMovieVideos();
    }, []);
}

export default useMovieTrailer;