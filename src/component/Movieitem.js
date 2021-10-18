import React from "react";
import Title from 'react-vanilla-tilt'
import "./MovieCard.css";

const Movieitem = (props)=> {
  // constructor() {
  //   super();
  //   this.apiKey = '8715e8842217df4604773f0cef2fca91';
  //   this.state = {};
  // }

  // viewMore = () => {
  //   `GENRE : ${this.props.movie.genre_ids}`,
  //   this.fetchGenre();
  // };
  // fetchGenre() {
  //   fetch(

  //    `https://api.themoviedb.org/3/genre/movie/list?&api_key=${this.apiKey}`,
  //   )
  //     .then(data => data.json())
  //     .then(data => {
  //       const resultGenres = data.genres;
  //       const genreRow = [];
  //       console.log(resultGenres);
  //       resultGenres.map(genre => {
  //         console.log('name', genre.name, 'id', genre.id);
  //         const genres = <div>
  //                         <text>genre: {'{'}genre.name{'}'}</text>;
  //                       </div>

  //         genreRow.push(genres);
  //       });
  //       this.setState({gen: genreRow});
  //     });
  //   }

    let {
      title,
      original_title,
      overview,
      release_date,
      vote_average,
      imageUrl,
      language,
      genres,
      // movie_id,
      backdrop_path,
    } =props;
    return (
      <>
        <div className="container cardContainer">
        <Title  style={{backgroundColor:"rgba(255, 255, 255, 0)", padding: "0px", borderRadius: "15px"}}>

          <div className="card">
            <div className="contents">
              <img
                src={`https://image.tmdb.org/t/p/w500` + imageUrl}
                alt="img"
                className="imgfluid  "
              />
              <p className="card-title  title-1 ">
                <span className="cardThead">Movie Name : </span>
                {original_title}
              </p>
              <p className="card-title title-2">
                <span className="cardThead">As You Know :</span> {title}
              </p>
              <p className="card-text text1">
                <span className="cardThead">IMDP Reting : </span>
                {vote_average}.
              </p>
              <p className="card-text text-2">
                <span className="cardThead">Release date : </span>
                {release_date}.
              </p>
            </div>
            <div className="hoverContent">
              <p>
                <span>Overview:- </span>
                {overview}
              </p>
              <p>
                <span>Language:- </span>
                {language}
              </p>
              <img
                src={`https://image.tmdb.org/t/p/w500` + backdrop_path}
                alt="img"
                className="imgfluid  "
              />
              <p>{genres}</p>
            </div>
          </div>
          </Title>
        </div>
        {/* <hr/> */}
        {/* <div
          className="card  "
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="row g-0">
            <div className="icon icon-rose col-md-3">
              <img
                src={`https://image.tmdb.org/t/p/w500` + imageUrl}
                alt="img"
                className="material-icons img-fluid rounded-start imgSize"
              />
            </div>
            <div className="col-md-7 ">
              <div className="card-body">
                <p className="card-title ">
                  <span className="cardThead">Movie Name : </span>
                  {original_title}
                </p>
                <p className="card-title">
                  <span className="cardThead">As You Know :</span> {title}
                </p>
                <p className="card-text">
                  <span className="cardThead">IMDP Reting : </span>
                  {vote_average}.
                </p>
                <p className="card-text">
                  <span className="cardThead">Release date : </span>
                  {release_date}.
                </p>
                <p className="card-text">
                  <span className="cardThead">Catagory : </span>
                {genres}
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3"></div>
            <div className="col-md-7 justify-content-end ">
              <div className="card-body   movie-overviews">
                <p className="card-title ">
                  <span className="cardThead"> Overview : </span>
                  {overview}
                </p>
                <p className="card-title">
                  <span className="cardThead">Language:</span> {language}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  
}

export default Movieitem;
