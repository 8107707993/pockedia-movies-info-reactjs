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
      loading: false,
      page: 1,
      total_results: 0,
    };
  }

  async componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8715e8842217df4604773f0cef2fca91&language=en-US&page=1`;
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      results: parsedata.results,
      total_results: parsedata.total_results,
      loading: false,
    });
    console.log(this.state.results);
  }

  render() {
    return (
      <>
        <div className="container bg-secondary  my-4">
          <div className="row justify-content-center">
            {this.state.results.map((element) => {
              return (
                <div className="col-md-10 cardSty" key={element.id}>
                  <Movieitem
                    language={element.original_language}
                    vote_average={element.vote_average}
                    original_title={element.original_title}
                    title={element.title}
                    release_date={element.release_date}
                    overview={element.overview}
                    imageUrl={element.poster_path}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
