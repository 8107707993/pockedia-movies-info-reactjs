import "./App.css";
import React, { useState } from "react";
import Footer from "./component/Footer";
// import Movie from "./component/Movie";
import Trending from "./component/Trending";
import Navbar from "./component/Navbar";
import ScrollTotop from "./component/ScrollTotop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./component/SearchBar";
import Adult from "./component/Adult";
import Movie from "./component/Movie";

const App = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const mCategory = "movie";
  const tvCategory ="tv"
  const apiKey = process.env.REACT_APP_TMDB_API;
  const tmdb_Url = "https://api.themoviedb.org/3/";
  const searchUrl = "search/movie";
  require("dotenv").config();
  const [language, setLanguage] = useState("en");

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
            <Trending totalPage={totalPage}
              setTotalPage={setTotalPage}
              apiKey={apiKey}
              pageNo={pageNo}
              setPageNo={setPageNo}
              baseurl={tmdb_Url}
              language={language}
              setLanguage={setLanguage}/>

          </Route>
          <Route exact path="/upcoming">
            <Movie key="upcoming"
            type="upcoming"
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
            <Movie key="popular"
            type="popular"
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
          <Route exact path="/topRated">
            <Movie key="top_rated"
            category={mCategory}

            type="top_rated"
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
            <Movie key="latest"
            type="latest"
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
          
          <Route exact path="/adult">
            <Adult key="adult"
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
            <Movie key="tvOnTheAir"
            type="on_the_air"
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
            <Movie key="tvPopular"
              type="popular"
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
          <Route exact path="/tvLatest">
            <Movie key="tvLatest"
            type="latest"
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
          <Route exact path="/tvAiringToday">
            <Movie key="tvAiringToday"
            type="airing_today"
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
          <Route exact path="/tvTopRated">
            <Movie key="tvTopRated"
            type="top_rated"
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
          <Route exact path="/tvAdult">
            <Adult key="tvAdult"
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
