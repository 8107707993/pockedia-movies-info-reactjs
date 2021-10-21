import './App.css';
import Footer from './component/Footer';
import Movie from './component/Movie';
import Navbar from './component/Navbar';



const App=()=> {
  const apiKey = "8715e8842217df4604773f0cef2fca91"
  const tmdb_Url ="https://api.themoviedb.org/3/"
  const searchUrl = "search/movie"
  
  return (
    <>
    

        <Navbar/>
        <Movie apiKey={apiKey} tmdb_Url={tmdb_Url}/>
        {/* <button>&#8679;</button> */}
        <Footer/>
    </>
  );
}

export default App;
