import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie( { title, year, summary, poster, genres } ){
    return(
        <div class = "movie">
            <img src={poster} alt = { title } title = { title } />
            <div className ="movie__data">
                <h3 className = "movie__title">{title}</h3>
                <h5 className = "movie__year">{year}</h5>
                <p className = "movie__summary">{summary.slice(0,180)}...</p>
                <ul className ="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                        <li key = {index} className = "movie__genre">
                            {genre}
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = { 
    year: PropTypes.number.isRequired,//개봉년도
    title: PropTypes.string.isRequired,//영화 제목
    summary: PropTypes.string.isRequired,//영화 시놉시스
    poster: PropTypes.string.isRequired,//영화 포스터(이미지 주소 문자열이 저장될 것.)
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,//영화 장르
};

export default Movie;