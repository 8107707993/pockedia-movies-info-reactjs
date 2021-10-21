import React from 'react'
import './CompoStyle.css';

const GenreSlide = ()=> {
   
   

        const slideL = function(){
            document.getElementById('btnContainer').scrollLeft -= 800;
        }
        const slideR= function(){
            document.getElementById('btnContainer').scrollLeft += 800;
        }
        return (
            <>
            
            
                <div className="container genreBtnGroup ">
               
                <div id="btnContainer" className="container btnContainer text-light d-flex">
                    <div className="genreBtn">Action</div>
                    <div className="genreBtn">Adventure</div>
                    <div className="genreBtn">Animation</div>
                    <div className="genreBtn">Comedy</div>
                    <div className="genreBtn">Crime</div>
                    <div className="genreBtn">Documentary</div>
                    <div className="genreBtn">Drama</div>
                    <div className="genreBtn">Family</div>
                    <div className="genreBtn">Fantasy</div>
                    <div className="genreBtn">History</div>
                    <div className="genreBtn">Horror</div>
                    <div className="genreBtn">Music</div>
                    <div className="genreBtn">Mystery</div>
                    <div className="genreBtn">Romance</div>
                    <div className="genreBtn">Scifi</div>
                    <div className="genreBtn">TvMovie</div>
                    <div className="genreBtn">Thriller</div>
                    <div className="genreBtn">War</div>
                    <div className="genreBtn">Western</div>
                    </div>
                    <div className="lrBtn d-flex justify-content-between position-sticky ">
                        <button type="button" onClick={slideL} id="btnLeft" className="btn  lbtn">&laquo;</button>
                        <button type="button" onClick={slideR} id="btnRight" className="btn rbtn">&raquo;</button>
                        </div>
                </div>                
                
            </>
        )
    
}

export default GenreSlide
