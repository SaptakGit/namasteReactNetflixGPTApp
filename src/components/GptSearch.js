import GptSearchBar from './GptSearchBar'
import GptMovieSuggesyions from './GptMovieSuggesyions'
import { BG_URL } from "../utlis/constants"

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img src={BG_URL} alt="bg-img"/>
        </div>
        <GptSearchBar />
        <GptMovieSuggesyions />
    </div>
  )
}

export default GptSearch