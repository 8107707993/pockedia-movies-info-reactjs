import React, { useEffect , useState } from "react";
import Movieitem from "./Movieitem";
import axios from "axios";
import "./MovieCard.css";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";


const Movie = (props)=> {

  const [movieResults, setMovieResults] = useState()
  const [pageNo, setPageNo] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const apiKey = props.apiKey
  useEffect(() => {
    axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${pageNo}`)
    .then(({data}) => {setMovieResults(data.results);setTotalPage(data.total_pages);console.log(data)} )
    .catch((err)=>console.log(err))
    
  }, [pageNo,apiKey])
  
  const handelNextClick = async () => {
    setPageNo(pageNo +1) 
  }; 
   const handelPrevClick = async ()=>{
      setPageNo(pageNo - 1)
   }

  
    return (
      
      <> 
           <ScrollUpButton
          EasingType="easeInQuart"
          ShowAtPosition={50}
          AnimationDuration={40}
        />  
      <div className="pageLableBox">
      <p className="pageLable">Page No :{pageNo}</p>
      </div>
        <div className="container container-bg  my-4">
          
          <div className="row justify-content-center">
            {movieResults && movieResults.map((element) => {
              return (
                <div className="col-md-11 cardSty" key={element.id}>
                  <Movieitem
                    language={element.original_language}
                    vote_average={element.vote_average}
                    original_title={element.original_title}
                    title={element.title}
                    release_date={element.release_date}
                    genres={[element.genre_ids,]}
                    overview={element.overview}
                    imageUrl={element.poster_path}
                    movie_id={element.id}
                    backdrop_path={element.backdrop_path}
                  />
                </div>
              );
            })}
          </div>
          
        </div>
        <div className="d-flex justify-content-between">
            <button disabled={pageNo <=1} type="button" onClick={handelPrevClick} className="btn np">&laquo; Previous </button>
            
            
            <button disabled={pageNo >= totalPage} type="button" onClick={handelNextClick} className="btn np">Next &raquo;</button>
          </div>
      </>
    );
  
}
 // static defaultProps = {
  //   // region: "in",
  //   pageSize: 10,
  //   // category: "general",
  // };

  // static propType = {
  //   // country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   // category: PropTypes.string,
  // };

export default Movie;
