import React from "react";
// import Movieitem from "./Movieitem";
import Title from 'react-vanilla-tilt'
import "./css/MovieCard.css";
import RemoveFavourite from "./icon/RemoveFavourite";

const FavouriteList = (props) => {
  const favouriteResult = props.favouriteMovie;

  console.log(favouriteResult)
  return (
    <>
    <div className="container" style={{marginTop:"150px", }}>
        <div className="row">
      {favouriteResult &&
        favouriteResult.map((fResult) => (
            
            <div className="col-md-4  cardSty" >
            <Title  style={{backgroundColor:"rgba(255, 255, 255, 0)", padding: "0px", borderRadius: "15px"}}>

            <div className="card" key={fResult.id}>
              <div className="contents">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + fResult.poster_path}
                  alt="img"
                  className="imgfluid  "
                />
                <p className="card-title  title-1 ">
                  <span className="cardThead"> Name : </span>
                  {fResult.original_title || fResult.original_name}
                </p>
                <p className="card-title title-2">
                  <span className="cardThead">As You Know :</span> {fResult.title || fResult.name}
                </p>
                <p className="card-text text1">
                  <span className="cardThead">IMDP Reting : </span>
                  {fResult.vote_average}.
                </p>
                <p className="card-text text2">
                  <span className="cardThead">Release date : </span>
                  {fResult.release_date || fResult.first_air_date}.
                </p>
              </div>
              <div className="hoverContent">
                <div className="contentitem">
                  <div  onClick={()=> props.hendeleFavouriteClick(fResult)} className="favouriteStyle">
                  <RemoveFavourite/>       
                  </div>
                                <p>
                  <span>Title:- </span>
                  {fResult.original_title || fResult.original_name }
                </p>
                <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + fResult.backdrop_path}
                  alt="img"
                  className="imgfluid  "
                /></p><p>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + fResult.poster_path}
                  alt="img"
                  className="imgfluid  "
                /></p>
                <p>
                  <span>Overview:- </span>
                  {fResult.overview}
                </p>
                <p>
                  <span>Language:- </span>
                  {fResult.original_language}
                </p>
                
                </div>
              </div>
            </div>
            </Title>
            </div>
        //   <Movieitem
        //     language={fResult.original_language}
        //     vote_average={fResult.vote_average}
        //     fResult.original_title || fResult.original_name={fResult.fResult.original_title || fResult.original_name || fResult.original_name}
        //     title={fResult.title || fResult.name}
        //     release_date={fResult.release_date || fResult.first_air_date}
        //     genres={[fResult.genre_ids]}
        //     overview={fResult.overview}
        //     imageUrl={fResult.poster_path}
        //     movie_id={fResult.id}
        //     backdrop_path={fResult.backdrop_path}
        //   />
        ))}
            </div>
            </div>
    </>
  );
};

export default FavouriteList;
