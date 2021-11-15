import axios from "axios";
import React, { useEffect } from "react";
import "./css/GenreSlide.css";

const GenreSlide = ({
  genress,
  setGenress,
  selectedGenres,
  setSelectedGenres,
  setPageNo,
  type,
  baseurl,
  movieResults
}) => {
  

 async function updataData () {
    try {
        await axios
        .get(`${baseurl}genre/${type}/list?api_key=8715e8842217df4604773f0cef2fca91&language=en-US`)
        .then(( {data}) => {
          setGenress(data.genres);
          // setTotalPage(data.total_pages);
          console.log(data );
        })
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
  
  useEffect(() => {
   updataData();

   return ()=>{
     setGenress({});
   }
   // eslint-disable-next-line
  }, [baseurl,type]);

  const hendeleAdd =(genre) =>{
   setSelectedGenres([...selectedGenres,genre]);
   setGenress(genress.filter((g)=> g.id !== genre.id));
   setPageNo(1);
  }
  const hendeleRemove =(genre)=>{
    setSelectedGenres(selectedGenres.filter((selected)=> selected.id !== genre.id));
    setGenress([...genress,genre]);
    setPageNo(1);
  }
  return (
    <>
      <div className="chip">
      { selectedGenres && selectedGenres.map((genre)=>(
          <div className="name" style={{backgroundColor:"#18345b"}} onClick={() => hendeleRemove(genre)} key={genre.id}>{genre.name} </div>
        ))}
        {genress && movieResults && genress.map((genre)=>(
          <div className="name" onClick={() => hendeleAdd(genre)} key={genre.id}>{genre.name} </div>
        ))}
      </div>
    </>
  );
};

export default GenreSlide;
