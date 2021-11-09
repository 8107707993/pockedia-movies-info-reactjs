import React from "react";
import Title from 'react-vanilla-tilt'
import "./css/MovieCard.css";
import AddFavourite from "./icon/AddFavourite";

const Movieitem = (props)=> {

 
    let {
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
      backdrop_path,
    } =props;

    return (
      <>
        
        <Title  style={{backgroundColor:"rgba(255, 255, 255, 0)", padding: "0px", borderRadius: "15px"}}>

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
              <p className="card-title title-2">
                <span className="cardThead">As You Know :</span> {title}
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
            <div className="hoverContent">
              <div className="contentitem">
                <div  onClick={()=> props.addfavouritesMovie(elements)} className="favouriteStyle">
                <AddFavourite/>       
                </div>
                              <p>
                <span>Title:- </span>
                {original_title}
              </p>
              <p>
              <img
                src={`https://image.tmdb.org/t/p/w500` + backdrop_path}
                alt="img"
                className="imgfluid  "
              /></p><p>
              <img
                src={`https://image.tmdb.org/t/p/w500` + imageUrl}
                alt="img"
                className="imgfluid  "
              /></p>
              <p>
                <span>Overview:- </span>
                {overview}
              </p>
              <p>
                <span>Language:- </span>
                {language}
              </p>
              <p>{genres}</p>
              </div>
            </div>
          </div>
          </Title>
        
        
      </>
    );
  
}

export default Movieitem;
