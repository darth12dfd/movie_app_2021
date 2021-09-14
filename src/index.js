import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//App 컴포넌트를 임포트

//render의 첫 번째 인자는 컴포넌트. 그리고 두 번째 인자는 해당 컴포넌트가 그려질 위치를 지정한다.
ReactDOM.render(<App />,document.getElementById('root'));//import 한 App 컴포넌트 사용