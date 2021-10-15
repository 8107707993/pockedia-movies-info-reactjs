import React, { Component } from "react";

import Movieitem from "./Movieitem";
// import { useEffect } from "react";
// import axios from "axios";
export class Movie extends Component {
  // static defaultProps = {
  //   region: "in",
  //   pageSize: 9,
  //   category: "general",
  // };

  // static propType = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      genre_ids:[],
      loading: false,
      page: 1,
      total_results: 0,
      
    };
  }

  async componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8715e8842217df4604773f0cef2fca91&language=en-US&page=1`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      results: parsedata.results,
      genre_ids: parsedata.genre_ids,
      total_results: parsedata.total_results,
      total_pages:parsedata.total_pages,
      loading: false,
    });
  }
  
    

  render() {
    return (
      <>
        <div className="container container-bg  my-4">
          <div className="row justify-content-center">
            {this.state.results.map((element) => {
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
            <button type="button" className="btn np">&laquo; Previous </button>
            <button type="button" className="btn np">Next &raquo;</button>
          </div>
      </>
    );
  }
}

export default Movie;
