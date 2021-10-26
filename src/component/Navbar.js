import React from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = ()=> {
  
    return (
      <>
        <div id="container" className="container position-sticky  top-0">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light  blur blur-rounded top-0 z-index-fixed  nav-sty position-absolute my-3 py-2 start-0 end-0 mx-4">
                <div className="container-fluid px-0">
                  <a
                    className="navbar-brand font-weight-bolder ps-1 ms-sm-3"
                    href=" https://demos.creative-tim.com/marketplace/soft-ui-design-system-pro/presentation.html "
                    rel="tooltip"
                    title="Designed and Coded by Creative Tim"
                    data-placement="bottom"
                    target="_blank"
                  >
                    Pockedia Movie Info
                  </a>
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
                      <li className="nav-item  mx-2">
                        <a href="/" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                        Trending
                        </a>
                      </li>
                      <li className="nav-item  mx-2">
                        <a href="/" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                        Movies
                        </a>
                      </li>
                      <li className="nav-item  mx-2">
                        <a href="/" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                        Tv Series
                        </a>
                      </li>
                      <li className="nav-item dropdown mx-2">
                        <a href="/" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                          Types
                        </a>
                        <ul className="dropdown-containt" >
                          <li className="drop-item"><a className="drop-link" href="/">Upcoming</a></li>
                          <li className="drop-item"><a className="drop-link" href="/">Popular</a></li>
                          <li className="drop-item"><a className="drop-link" href="/">Top_rated</a></li>
                        </ul>
                      </li>
                    
                      <SearchBar/>
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
  
}

export default Navbar;
