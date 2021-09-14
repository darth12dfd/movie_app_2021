import React from 'react';
import PropTypes from 'prop-types';

//App 컴포넌트 내부에 컴포넌트 생성 및 컴포넌트에 props를 인자로 받음(여러 개로 받기 위한 용도)
function Movie({ name, picture, rating }){
  return (
  <div>
    <h2>{ name }</h2>
    <h4>{ rating }/5.0 </h4>
    <img src = { picture } alt = { name } />
  </div>
  );
}

const movieList = [
  {
    id: 1,
    name : 'Star Wars Episode 3: Revenge of the Sith',
    image : 'https://t1.daumcdn.net/cfile/blog/1655DB344FFBD8D125',
    rating: 3,
  },
  {
    id: 2,
    name: 'Venom',
    image: 'http://t1.daumcdn.net/movie/b9ee324dbc9f46cd9a842cfe673bd2bb1537502085349',
    rating: 2
  },
  {
    id: 3,
    name : 'The Shining',
    image: 'https://t1.daumcdn.net/cfile/tistory/994F183C5BED1A8B32',
    rating: 4.5
  },
];//영화 목록

//App 컴포넌트 정의 및 App 컴포넌트에 컴포넌트를 넣는다.
function App() {
  return (
  <div>
    <h1>Hello</h1>
    {movieList.map(film => (
      <Movie key = { film.id } name = { film.name } picture = { film.image } rating = { film.rating } />
      ))}
  </div>
  );
}

Movie.propTypes ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;