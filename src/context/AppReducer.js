export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_IN_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movi) => movi.id !== action.payload),
      };

      case "ADD_MOVIE_IN_WATCHED":
          return{
              ...state,
              watchlist:state.watchlist.filter((movi)=> movi.id !== action.payload.id),
              watched: [action.payload, ...state.watched],
          }
    default:
      return state;
  }
};
