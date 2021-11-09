import "./App.css";
import React, { useState,useEffect } from "react";
import Footer from "./component/Footer";
// import Movie from "./component/Movie";
import Trending from "./component/Trending";
import Navbar from "./component/Navbar";
import ScrollTotop from "./component/ScrollTotop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./component/SearchBar";
import Adult from "./component/Adult";
import Movie from "./component/Movie";
import AddFavourite from "./component/icon/AddFavourite";
import FavouriteList from "./component/FavouriteList";
import RemoveFavourite from "./component/icon/RemoveFavourite";

const App = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [movieResults, setMovieResults] = useState();
  const [favourites, setFavourites] = useState([]);
  const mCategory = "movie";
  const tvCategory = "tv";
  const apiKey = process.env.REACT_APP_TMDB_API;
  const tmdb_Url = "https://api.themoviedb.org/3/";
  const searchUrl = "search/movie";
  require("dotenv").config();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const movieFavourite = JSON.parse(localStorage.getItem('react-movie-favourite-list'));
    setFavourites(movieFavourite);
    
  }, [])

  const saveToLoacalStorage = (item) => {
    localStorage.setItem('react-movie-favourite-list',JSON.stringify(item));
  }

  const addFavouriteMovie = (element) => {
    const newFavouriteMovie = [...favourites, element];
    setMovieResults(movieResults.filter((g) => g.id !== element.id));
    setFavourites(newFavouriteMovie);
    saveToLoacalStorage(newFavouriteMovie);
    console.log(favourites);
  };

  const removeFavouriteMovie = (element) => {
    const newFavouriteMovie = favourites.filter((fav) => fav.id !== element.id);
    setFavourites(newFavouriteMovie);
    saveToLoacalStorage(newFavouriteMovie);
  };

  return (
    <>
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
            <FavouriteList
              removeFavourite={RemoveFavourite}
              favouriteMovie={favourites}
              hendeleFavouriteClick={removeFavouriteMovie}
            />
          </Route>

          <Route exact path="/upcoming">
            <Movie
              key="upcoming"
              type="upcoming"
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              category={mCategory}
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              category={mCategory}
              totalPage={totalPage}
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              category={tvCategory}
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              category={tvCategory}
              totalPage={totalPage}
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              category={tvCategory}
              totalPage={totalPage}
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
              category={tvCategory}
              movieResults={movieResults}
              setMovieResults={setMovieResults}
              addFavourites={AddFavourite}
              hendeleFavouriteClick={addFavouriteMovie}
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
    </>
  );
};

export default App;
