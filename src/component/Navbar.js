import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = (props) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location)
    
  }, [Location])
  return (
    <>
      <div id="container" className="container position-sticky  top-0">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light  blur blur-rounded top-0 z-index-fixed  nav-sty position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid px-0">
                <Link
                  to="/pockedia_movies_inforeactjs/"
                  className="navbar-brand font-weight-bolder ps-1 ms-sm-3"
                  rel="tooltip"
                  title="Designed and Coded by Creative Tim"
                  data-placement="bottom"
                  target="_blank"
                >
                  Pockedia Movie Info
                </Link>
                <button
                  className="navbar-toggler collapsed border-0 shadow-none ms-md-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon bar1 "></span>
                  <span className="toggler-icon bar2 "></span>
                  <span className="toggler-icon bar3 "></span>
                </button>
                <div
                  className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
                  id="navigation"
                >
                  <ul className="navbar-nav navbar-nav-hover mx-auto">
                    <li className="nav-item  mx-1">
                      <Link
                        to="/pockedia_movies_inforeactjs/"
                        role="button"
                        className={`nav-link ${
                          Location.pathname === "/pockedia_movies_inforeactjs/"
                            ? "active"
                            : ""
                        } ps-2 d-flex justify-content-between cursor-pointer align-items-center`}
                      >
                        Trending
                      </Link>
                    </li>

                    <li className="nav-item  mx-1">
                      <Link
                        to="/favourite"
                        role="button"
                        className={`nav-link ${
                          Location.pathname === "/favourite"
                            ? "active"
                            : ""
                        } ps-2 d-flex justify-content-between cursor-pointer align-items-center`}
                      >
                        Favourite
                      </Link>
                    </li>

                    <li className="nav-item  mx-1">
                      <Link
                        to="/watchlist"
                        role="button"
                        className={`nav-link ${
                          Location.pathname === "/watchlist"
                            ? "active"
                            : ""
                        } ps-2 d-flex justify-content-between cursor-pointer align-items-center`}
                      >
                        Watchlist
                      </Link>
                    </li>

                    <li className="nav-item  mx-1">
                      <Link
                        to="/watched"
                        role="button"
                        className={`nav-link ${
                          Location.pathname === "/watched"
                            ? "active"
                            : ""
                        } ps-2 d-flex justify-content-between cursor-pointer align-items-center`}
                      >
                        Watched
                      </Link>
                    </li>

                    <li className="nav-item dropdown mx-1">
                      <li
                        role="button"
                        className={`nav-link 
                        
                        //   Location.pathname === "/upcoming" || "/popular" || "/top_rated" || "/latest" || "/adult"
                        //     ? "active"
                        //     : ""
                        // }
                          ps-2 d-flex justify-content-between cursor-pointer align-items-center`}
                      >
                        Movies
                      </li>
                      <ul className="dropdown-containt">
                        <li
                          onClick={props.hendelTypeClick}
                          value="/upcoming"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/upcoming">
                            Upcoming
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/popular"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/popular">
                            Popular
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/top_rated"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/topRated">
                            Top_rated
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/latest"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/latest">
                            Latest
                          </Link>
                        </li>
                        <li className="drop-item">
                          <Link className="drop-link" to="/adult">
                            Adults
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown mx-1">
                      <li
                        role="button"
                        className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      >
                        Tv Series
                      </li>
                      <ul className="dropdown-containt">
                        <li
                          onClick={props.hendelTypeClick}
                          value="/on_the_air"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/tvOnTheAir">
                            On The Air
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/popular"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/tvPopular">
                            Popular
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/latest"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/tvLatest">
                            Latest
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/airing_today"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/tvAiringToday">
                            Airing Today
                          </Link>
                        </li>
                        <li
                          onClick={props.hendelTypeClick}
                          value="/top_rated"
                          className="drop-item"
                        >
                          <Link className="drop-link" to="/tvTopRated">
                            Top_rated
                          </Link>
                        </li>
                        <li className="drop-item">
                          <Link className="drop-link" to="/tvAdult">
                            Adults
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/searchBar" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                        Search
                        </Link>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
