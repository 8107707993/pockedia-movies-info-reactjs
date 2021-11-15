import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movieitem from "./Movieitem";

const Watched = (props) => {
  const { watched } = useContext(GlobalContext);

  function capitise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className="container" >
        <div className="title"  style={{marginTop:"-63px"}}>
          {capitise(props.type)}
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "200px" }}
        >
          {Watched.length > 0 ? (watched.map((m) => (
            <div className="col-md-4 cardSty " key={m.id}>
              <Movieitem
                title={m.title || m.name}
                original_title={m.original_title || m.original_name}
                overview={m.overview}
                release_date={m.release_date || m.first_air_date}
                vote_average={m.vote_average}
                imageUrl={m.poster_path}
                language={m.language}
                genres={m.genres}
                movie_id={m.id}
                elements={m}
                type={props.type}
                backdrop_path={m.backdrop_path}
              />
            </div>
          ))) : ( <h1 style={{zIndex:"1" ,color:"#FFF"}}>No Movie IN Your Watched ! Add Some Movie !  </h1>)}
        </div>
      </div>
    </>
  );
};

export default Watched;
