import React from "react";
import PropTypes from 'prop-types';

function Movie( { id, title, year, summary, poster } ){
    return <h4>{ title }</h4>;
}

Movie.propTypes = { 
    id: PropTypes.number.isRequired,//API에서 넘어오는 id
    year: PropTypes.number.isRequired,//개봉년도
    title: PropTypes.string.isRequired,//영화 제목
    summary: PropTypes.string.isRequired,//영화 시놉시스
    poster: PropTypes.string.isRequired,//영화 포스터(이미지 주소 문자열이 저장될 것.)
};

export default Movie;