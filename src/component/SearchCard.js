import React, {useState , useEffect} from "react";
import Title from "react-vanilla-tilt";
import "./css/SearchBar.css";
// import NoPoster from "./NoPoster.gif";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import FullViwe from "./FullViwe";

function SearchCard({
  title,
  language,
  vote_average,
  original_title,
  release_date,
  genres,
  overview,
  imageUrl,
  movie_id,
  backdrop_path,
}) {
  const baseurl = "https://api.themoviedb.org/3/";
  const mId = document.getElementById({movie_id})
  // const videoUrl = "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US";
  const [movieId, setMovieId] = useState(11470);
  const [movieVideoLink, setMovieVideoLink] = useState([]);
  async function updataVideo () {
    try {
      await axios
      .get(`${baseurl}movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`)
      .then(( {data}) => {
        setMovieVideoLink(data.results);
        setMovieId(11470)
        // setTotalPage(data.total_pages);
        const key = movieVideoLink.map((mk)=>mk.key);
        console.log(key +"video link");
      })
    } catch (err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
  updataVideo();
    
    return () => {
      // setMovieVideoLink([]);
    }
  }, [])

  return (
    <>
  <Router>
    <Switch>
      <Route exact path="/more">
        <FullViwe movieId={mId}/>
      </Route>
    </Switch>
  </Router>
      <Title
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          padding: "0px",
          borderRadius: "15px",
        }}
        key={movie_id}
      >
        <div className="seacard">
          <div className="contents">
            {imageUrl ? (
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w200` + imageUrl}
                alt={`${title} Poster`}
              ></img>
            ) : (
              <img alt={title}
                src={
                  "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
                }
              ></img>
            )}
            <h3 id="title">{title}</h3>
            <div className="spn">
              <span>{vote_average}</span>
              <span>{release_date} </span>
            </div>
          </div>
          {/* Hover Content */}
          <div className="hoverContainer">
            <div className="hoverContaent row">
              <h4>{title}</h4>
              
             <Link to="/" target="_blank" ><img
                className="img1"
                src={`https://image.tmdb.org/t/p/w200` + imageUrl}
                alt={`${title} Poster`}
                
              ></img></Link>
              <img
                className="img2"
                src={`https://image.tmdb.org/t/p/w200` + backdrop_path}
                alt={`${title} Poster`}
              ></img>
              <p>{overview}</p>
              <Link to="/more" id={movie_id}>More</Link>

              {/* <button type="button" onClick={`${key}`} */}
            </div>
          </div>
        </div>
      </Title>
    </>
  );
}

export default SearchCard;
