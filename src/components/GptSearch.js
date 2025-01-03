import GptSearchBar from './GptSearchBar'
import GptMovieSuggesyions from './GptMovieSuggesyions'
import { BG_URL } from "../utlis/constants"

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
            <img className='h-screen md:h-auto object-cover' src={BG_URL} alt="bg-img"/>
        </div>
    <div className=''>
        <GptSearchBar />
        <GptMovieSuggesyions />
    </div>
    </>
  )
}

export default GptSearch