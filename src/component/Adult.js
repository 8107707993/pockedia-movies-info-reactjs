import React, { useEffect, useState } from "react";
import Movieitem from "./Movieitem";
import axios from "axios";
import "./css/MovieCard.css";
import GenreSlide from "./GenreSlide";
import useGenres from "./useGenre";

const Adult = (props) => {
  const [movieResults, setMovieResults] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genress, setGenress] = useState({});
  const apiKey = props.apiKey;
  const baseurl = props.baseurl;
  const genresUrl = useGenres(selectedGenres);
  const language = props.language;
  const pageNo = props.pageNo;
  const setPageNo =props.setPageNo;
  const totalPage =props.totalPage;
  const setTotalPage = props.setTotalPage;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/${props.category}?api_key=${apiKey}&language=en-${language}&sort_by=original_title.desc&include_adult=true&include_video=true&page=${pageNo}&with_watch_monetization_types=free&with_genres=${genresUrl}`
        
      )
      .then(({ data }) => {
        setMovieResults(data.results);
        setTotalPage(data.total_pages);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [pageNo, apiKey,genresUrl,language]);

  const handelNextClick = async () => {
    setPageNo(pageNo + 1);
  };
  const handelPrevClick = async () => {
    setPageNo(pageNo - 1);
  };

  return (
    <>
      <div className="pageLableBox">
        <p className="pageLable">Page No :{pageNo}</p>
      </div>
      <div className="container container-bg  my-4">
        <GenreSlide
          genress={genress}
          selectedGenres={selectedGenres}
          setGenress={setGenress}
          setSelectedGenres={setSelectedGenres}
          type="movie"
          setPageNo={setPageNo}
          movieResults={movieResults}
          baseurl={baseurl}
        />
        <div className="row justify-content-center">
          {movieResults &&
            movieResults.map((element) => {
              return (
                <div className="col-md-4 cardSty" key={element.id}>
                  <Movieitem
                    language={element.original_language}
                    vote_average={element.vote_average}
                    original_title={element.original_title ||  element.original_name}
                    title={element.title || element.name}
                    release_date={element.release_date || element.first_air_date}
                    genres={[element.genre_ids]}
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
        <button
          disabled={pageNo <= 1}
          type="button"
          onClick={handelPrevClick}
          className="btn np" style={{zIndex:"100"}}
        >
          &laquo; Previous{" "}
        </button>

        <button
          disabled={pageNo >= totalPage}
          type="button"
          onClick={handelNextClick}
          className="btn np" style={{zIndex:"100"}}
        >
          Next &raquo;
        </button>
      </div>
    </>
  );
};
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

export default Adult;
