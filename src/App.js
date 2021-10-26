import './App.css';
import Footer from './component/Footer';
import Movie from './component/Movie';
import Navbar from './component/Navbar';
import ScrollTotop from './component/ScrollTotop';



const App=()=> {
  const apiKey =process.env.REACT_APP_TMDB_API
  const tmdb_Url ="https://api.themoviedb.org/3/"
  const searchUrl = "search/movie"
  require('dotenv').config()
  return (
    <>
    

        <Navbar searchUrl={searchUrl}/>
        <Movie apiKey={apiKey} baseurl={tmdb_Url}/>
        <ScrollTotop/>
        <Footer/>
    </>
  );
}

export default App;
