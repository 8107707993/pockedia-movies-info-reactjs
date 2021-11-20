import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "react-vanilla-tilt";
import "./css/MovieCard.css";
import AddIcon from "./icon/AddIcon";
import "./image/NoPoster.gif";
import "./css/MovieCrousel.css";
import MovieCrousel from "./MovieCrousel";

const Movieitem = ({
  title,
  original_title,
  overview,
  release_date,
  vote_average,
  imageUrl,
  language,
  genres,
  movie_id,
  elements,
  type,
  category,
  backdrop_path,
}) => {
  const [castResultes, setCastResultes] = useState([]);
  const [crewResultes, setCrewResultes] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const [slideShow, setSlideShow] = useState(1);

  const fatchCatsAndCrew = async () => {
    await axios
      .get(
        `${baseUrl}/${category}/${movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US$include_adult=true`
      )
      .then(({ data }) => {
        if (data) {
          setCastResultes(data.cast);
          setCrewResultes(data.crew);
          console.log(data);
        }
      });
  };

  useEffect(() => {
    fatchCatsAndCrew();
  }, []);

  const slideL=()=>{
    window.scrollTo({
        left:0,
        behavior:'smooth'
    }
    )
}

const slideR=()=>{
  window.scrollTo({
      left: document.documentElement.scrollHeight,
      behavior:'smooth'
  })
}
  

  return (
    <>
      <Title
        className="vanilaCard"
        style={{
          // backgroundColor: "rgba(255, 255, 255, 0)",
          padding: "0px",
          borderRadius: "15px",
        }}
      >
        <div className="card">
          <div className="contents">
            <img
              src={`https://image.tmdb.org/t/p/w500` + imageUrl}
              alt="img"
              className="imgfluid  "
            />
            <p className="card-title  title-1 ">
              <span className="cardThead"> Name : </span>
              {original_title}
            </p>

            <p className="card-text text1">
              <span className="cardThead">IMDP Reting : </span>
              {vote_average}.
            </p>
            <p className="card-text text2">
              <span className="cardThead">Release date : </span>
              {release_date}.
            </p>
          </div>
          {/* Hover Container Start Here */}
          <div className="hoverContent">
            <div
              className="d-flex container"
              style={{
                position: "relative",
                backgroundColor: "#ffffff20",
                right: "-47px",
                borderRadius: "20px",
                top: "20px",
                width: "fit-content",
                paddingRight: "inherit",
                paddingLeft: "inherit",
                paddingBottom: "",
                boxShadow:
                  "-10px 10px 20px 10px #00000060 , 10px -10px 20px 10px #00000060",
              }}
            >
              <AddIcon type={type} elements={elements} />
            </div>
            <div className="contentitem">
              <p>
                <span>Title:- </span>
                {original_title}
              </p>
              <p className="card-title title-2">
                <span className="cardThead">As You Know :</span> {title}
              </p>
              <div className="imgContainer">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + backdrop_path}
                  alt="img"
                  className="imgfluid  "
                />

                <img
                  src={`https://image.tmdb.org/t/p/w500` + imageUrl}
                  alt="img"
                  className="imgfluid  "
                />
              </div>
              <p>
                <span>Overview:- </span>
                {overview}
              </p>
              {/* Cast Crousel */}
              <div id="crouselBody" className="crouselBody">
                <b class="prev" onclick={slideL} >&#10094;</b>
                <b class="next" onclick={slideR} >&#10095;</b>

                {castResultes &&
                  castResultes.map((castResulte) => (
                    <MovieCrousel
                      key={castResulte.id}
                      castResulte={castResulte}
                    />
                  ))}
                <a class="prev" onclick="plusSlides(-1)">
                  &#10094;
                </a>
              </div>
              <p>{genres}</p>
              <p> movie id {movie_id}</p>
            </div>
          </div>
        </div>
      </Title>
    </>
  );
};

export default Movieitem;
