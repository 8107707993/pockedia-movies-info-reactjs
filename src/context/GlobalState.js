import React, { useEffect, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial State

const initialState = {
  watchlist: localStorage.getItem("POCKEDIA_WATCHLIST")? JSON.parse(localStorage.getItem("POCKEDIA_WATCHLIST")):[],
  watched: localStorage.getItem("POCKEDIA_WATCHED")? JSON.parse(localStorage.getItem("POCKEDIA_WATCHLIST")):[],
  favouritelist: localStorage.getItem("POCKEDIA_FAVOURITE") ? JSON.parse(localStorage.getItem("POCKEDIA_FAVOURITE")):[],
  showingmodel:[],
  
};

//  create context

export const GlobalContext = createContext(initialState);

// Global Provider

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("POCKEDIA_WATCHLIST" , JSON.stringify(state.watchlist));
    localStorage.setItem("POCKEDIA_WATCHED" , JSON.stringify(state.watched));
    localStorage.setItem("POCKEDIA_FAVOURITE" , JSON.stringify(state.favouritelist));

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

  const addfavouriteMovie = (element) => {
    dispatch({type: "ADD_MOVIE_IN_FAVOURITE", payload: element});
  };

  const removeFromFavourite = (id) =>{
    dispatch({type: "REMOVE_FROM_FAVOURITE", payload: id});
  };

  const showingAnModel = (element) =>{
    dispatch({type: "SHOWING_AN_MODEL", payload:element});
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        favouritelist:state.favouritelist,
        showingmodel:state.showingmodel,
        addMovieInWatchlist,
        removeFromWatchlist,
        addMovieInWatched,
        addfavouriteMovie,
        removeFromFavourite,
        showingAnModel,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
