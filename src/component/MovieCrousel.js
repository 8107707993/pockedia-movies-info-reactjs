import React from "react";
import "./css/MovieCrousel.css";
import './image/NoPoster.gif';

const MovieCrousel = ({castResulte}) => {
  return (
    <div className="crouselContainer">
    <img src={castResulte.profile_path ? `https://image.tmdb.org/t/p/w200${castResulte.profile_path}`:"./image/NoPoster.gif" } alt={castResulte.name} />      
    <b>Name:- {castResulte.name}</b>
    <hr/>
    <b>Character:- {castResulte.character}</b>
    </div>
      );
};

export default MovieCrousel;
