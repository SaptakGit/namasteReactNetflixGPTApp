import { useDispatch, useSelector } from "react-redux";
import lang from "../utlis/langusgeConstants";
import { useRef } from "react";
import openai from "../utlis/openai";
import { API_OPTIONS } from "../utlis/constants";
import { addGptMovieResult } from "../utlis/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+
       movie +
      "&include_adult=false&language=en-US&page=1", 
      API_OPTIONS);

      const json = await data.json();

      return json.results ;
  };

  const handleGprSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to OpenAI GPT API and get movie results.

    const gptQuery = "Act as a Movie Recomandation System and suggest some movies for the query : " + searchText.current.value + ". Only give me names of 5 movies, comma separatedlike the example result given ahead. Example Result: Gadar,Sholey, Don, Golmaal, Koi Mil Gaya";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    
    if(!getResults.choices){
      //handle error
      console.log('Error Handle');
    }

    //console.log(getResults.choices[0]?.message?.content);
    const gptMovies = getResults.choices[0]?.message?.content.split(',');

    // For eaach movie we will search the TMDB API
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // This will return us 5 promises not the result, as it is an async function

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  return (
    <div className="pt-[15%] flex justify-center">
        <form className= "w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input 
                ref = {searchText}
                type="text" 
                className="p-4 m-4 col-span-9" 
                placeholder={lang[langKey].gptSeachPlaceHolder}
            />
            <button 
              className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" 
              onClick={handleGprSearchClick}>
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar