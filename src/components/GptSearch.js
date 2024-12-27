import GptSearchBar from './GptSearchBar'
import GptMovieSuggesyions from './GptMovieSuggesyions'
import { BG_URL } from "../utlis/constants"

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img src={BG_URL} alt="bg-img"/>
        </div>
        <GptSearchBar />
        <GptMovieSuggesyions />
    </div>
  )
}

export default GptSearch