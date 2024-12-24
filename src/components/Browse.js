import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/*
        Main Video Container
          - Video Background
          - Video Title
        Seceondary Container
          - Movielist * n
          - Cards * n
      
      
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse