import axios from 'axios';
import React, {useEffect, useState} from 'react'

const FullViwe = ({movieId}) => {
    const [movieData, setMovieData] = useState([]);

    const url = "https://api.themoviedb.org/3/movie";
    
    async function loadData (){
        try {
            await axios
            .get(`${url}/11470?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`)
            .then(({data})=>console.log(data +"hhh"))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
        
    }, [])

    return (
        <> <div style={{backgroundColor:"#fff" ,width:"20px",height:"20px"}}>
            {movieData && movieData.map((d) => (
                <div key={d.id} className="container" style={{marginTop:"100px"  }} >{d.title}</div>
            ))}        
            </div>
        </>
    )
}

export default FullViwe
