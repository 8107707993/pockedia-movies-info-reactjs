import React, { useEffect, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial State

const initialState = {
  watchlist: localStorage.getItem("POCKEDIA_WATCHLIST")? JSON.parse(localStorage.getItem("POCKEDIA_WATCHLIST")):[],
  watched: localStorage.getItem("POCKEDIA_WATCHED")? JSON.parse(localStorage.getItem("POCKEDIA_WATCHLIST")):[],
  
};

//  create context

export const GlobalContext = createContext(initialState);

// Global Provider

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("POCKEDIA_WATCHLIST" , JSON.stringify(state.watchlist));
    localStorage.setItem("POCKEDIA_WATCHED" , JSON.stringify(state.watched));
  }, [state])

  const addMovieInWatchlist = (element) => {
    dispatch({ type: "ADD_MOVIE_IN_WATCHLIST", payload: element });
  };

  const removeFromWatchlist = (id) =>{
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  } ;

  const addMovieInWatched = (element) => {
    dispatch({type: "ADD_MOVIE_IN_WATCHED", payload: element});
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieInWatchlist,
        removeFromWatchlist,
        addMovieInWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
