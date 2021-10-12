import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie( { title, year, summary, poster } ){
    return(
        <div class = "movie">
            <img src={poster} alt = { title } title = { title } />
            <div class ="movie__data">
                <h3 class = "movie__title">{title}</h3>
                <h5 class = "movie__year">{year}</h5>
                <p class = "movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = { 
    year: PropTypes.number.isRequired,//개봉년도
    title: PropTypes.string.isRequired,//영화 제목
    summary: PropTypes.string.isRequired,//영화 시놉시스
    poster: PropTypes.string.isRequired,//영화 포스터(이미지 주소 문자열이 저장될 것.)
};

export default Movie;