import React, { useContext } from "react";
import Title from "react-vanilla-tilt";
import "./css/MovieCard.css";
import { GlobalContext } from "../context/GlobalState";

const Movieitem = ({
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
  type,
  backdrop_path,
}) => {
  const {
    addMovieInWatchlist,
    watchlist,
    removeFromWatchlist,
    addMovieInWatched,
    watched,
  } = useContext(GlobalContext);

  let storeWatchlist = watchlist.find((o) => o.id === elements.id);
  let storeWatched = watched.find((o) => o.id === elements.id);

  const disebleWatchlit = storeWatchlist ? true : false;
  const disebleWatched = storeWatchlist ? true : false;

  return (
    <>
      <Title
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          padding: "0px",
          borderRadius: "15px",
        }}
      >
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
          {/* Hover Container Start Here */}
          <div className="hoverContent">
            <div className="contentitem">
              <p
                className="d-flex "
                style={{ float: "right", backgroundColor: "#00000009" }}
              >
                {type === "WatchList" && (
                  <>
                    <button
                      disabled={disebleWatched}
                      onClick={() => addMovieInWatched(elements)}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add To Watched "
                      className="btn "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeFromWatchlist(elements.id)}
                      className=" btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Remove From WatchList?"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </>
                )}
                {type === "Watched" && (
                  <>
                    <button
                      id="watchlist"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add To Watchlist "
                      className=" btn "
                      disabled={disebleWatchlit}
                      onClick={() => addMovieInWatchlist(elements)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        class="bi bi-bookmarks"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => removeFromWatchlist(elements.id)}
                      className=" btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Remove From WatchList?"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </>
                )}
                {type === "genral" && (
                  <>
                  <button
                      id="watchlist"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add To Watchlist "
                      className=" btn "
                      disabled={disebleWatchlit}
                      onClick={() => addMovieInWatchlist(elements)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        class="bi bi-bookmarks"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                      </svg>
                    </button>
                    <button
                      disabled={disebleWatched}
                      onClick={() => addMovieInWatched(elements)}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add To Watched "
                      className="btn "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeFromWatchlist(elements.id)}
                      className=" btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Remove From WatchList?"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </p>
              <p>
                <span>Title:- </span>
                {original_title}
              </p>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + backdrop_path}
                  alt="img"
                  className="imgfluid  "
                />
              </p>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + imageUrl}
                  alt="img"
                  className="imgfluid  "
                />
              </p>
              <p>
                <span>Overview:- </span>
                {overview}
              </p>
              <p>
                <span>Language:- </span>
                {language}
              </p>
              <div>
                <button className="btn btn-sm btn-info">
                  Add to Watchlist
                </button>
              </div>
              <p>{genres}</p>
              <p> movie id {movie_id}</p>
            </div>
          </div>
        </div>
      </Title>
    </>
  );
};

export default Movieitem;
