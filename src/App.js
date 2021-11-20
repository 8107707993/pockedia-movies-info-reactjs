import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Trending from "./component/Trending";
import Navbar from "./component/Navbar";
import ScrollTotop from "./component/ScrollTotop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./component/SearchBar";
import Adult from "./component/Adult";
import Movie from "./component/Movie";
import { GlobalProvider } from "./context/GlobalState";
import Watchlist from "./component/Watchlist";
import Watched from "./component/Watched";
import Favourite from "./component/Favourite";
// import axios from "axios";

// GlobalContext

const App = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movieResults, setMovieResults] = useState();
  const mCategory = "movie";
  const tvCategory = "tv";
  const apiKey = process.env.REACT_APP_TMDB_API;
  const tmdb_Url = "https://api.themoviedb.org/3/";
  const searchUrl = "search/movie";
  require("dotenv").config();
  const [language, setLanguage] = useState("en");

  // const hendelePreview = async (id)=>{
  //   await axios.get()
  // }

  return (
    <>
      <GlobalProvider>
        <div className="backGround1">
          <div className="second">
            <div className="trio">
              <div className="squard"></div>
            </div>
          </div>
        </div>
        <div className="backGround2">
          <div className="second2">
            <div className="trio2">
              <div className="squard2"></div>
            </div>
          </div>
        </div>
        <Router>
          <Navbar
            searchUrl={searchUrl}
            language={language}
            setLanguage={setLanguage}
          />
          <Switch>
            <Route exact path="/pockedia_movies_inforeactjs/">
              <Trending
                totalPage={totalPage}
                ctype="genral"
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>

            <Route exact path="/favourite">
              <Favourite type="favourite" />
            </Route>

            <Route exact path="/watchlist">
              <Watchlist type="WatchList" />
            </Route>

            <Route exact path="/watched">
              <Watched type="Watched" />
            </Route>

            <Route exact path="/upcoming">
              <Movie
                key="upcoming"
                type="upcoming"
                ctype="genral"
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                category={mCategory}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/popular">
              <Movie
                key="popular"
                type="popular"
                ctype="genral"
                category={mCategory}
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/topRated">
              <Movie
                key="top_rated"
                category={mCategory}
                type="top_rated"
                ctype="genral"
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/latest">
              <Movie
                key="latest"
                type="latest"
                ctype="genral"
                category={mCategory}
                totalPage={totalPage}
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>

            <Route exact path="/adult">
              <Adult
                key="adult"
                category={mCategory}
                totalPage={totalPage}
                ctype="genral"
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            {/* Tv Link */}
            <Route exact path="/tvOnTheAir">
              <Movie
                key="tvOnTheAir"
                type="on_the_air"
                ctype="genral"
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                category={tvCategory}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/tvPopular">
              <Movie
                key="tvPopular"
                type="popular"
                ctype="genral"
                category={tvCategory}
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/tvLatest">
              <Movie
                key="tvLatest"
                type="latest"
                ctype="genral"
                category={tvCategory}
                totalPage={totalPage}
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/tvAiringToday">
              <Movie
                key="tvAiringToday"
                type="airing_today"
                ctype="genral"
                category={tvCategory}
                totalPage={totalPage}
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/tvTopRated">
              <Movie
                key="tvTopRated"
                type="top_rated"
                ctype="genral"
                category={tvCategory}
                movieResults={movieResults}
                setMovieResults={setMovieResults}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>
            <Route exact path="/tvAdult">
              <Adult
                key="tvAdult"
                ctype="genral"
                category={tvCategory}
                totalPage={totalPage}
                setTotalPage={setTotalPage}
                apiKey={apiKey}
                pageNo={pageNo}
                setPageNo={setPageNo}
                baseurl={tmdb_Url}
                language={language}
                setLanguage={setLanguage}
              />
            </Route>

            <Route exact path="/searchBar">
              <SearchBar
                ctype="genral"
                setTotalPage={setTotalPage}
                totalPage={totalPage}
                apiKey={apiKey}
                setPageNo={setPageNo}
                pageNo={pageNo}
              />
            </Route>
          </Switch>
        </Router>

        <ScrollTotop />
        <Footer />
      </GlobalProvider>
    </>
  );
};

export default App;
