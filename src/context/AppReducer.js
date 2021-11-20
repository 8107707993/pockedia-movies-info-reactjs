// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_IN_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter((movi) => movi.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movi) => movi.id !== action.payload),
        watched: state.watched.filter((movi) => movi.id !== action.payload),
      };

    case "ADD_MOVIE_IN_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movi) => movi.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "ADD_MOVIE_IN_FAVOURITE":
      return {
        ...state,
        favouritelist: [action.payload, ...state.favouritelist],
      };

    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favouritelist: state.favouritelist.filter(
          (movi) => movi.id !== action.payload
        ),
      };

      case "SHOWING_AN_MODEL":
        return{
          ...state,
          showingmodel: [action.payload, ...state.showingmodel],
        };
        
    default:
      return state;
  }
};
