/* eslint-disable */ 
import './App.css';
import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function App() {

  let [checked, setCheck] = useState(false);
  let [list, setList] = useState();
  
  let today = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let getFullDate = today.toLocaleDateString('ko-KR', options);
  let day = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  
  return (
    <div className="App center-container">
      <div className='main-card'>
        <div className='header'>
          <h1>{getFullDate}</h1>
          <span>{day}</span>
          <h6>할 일 2개 남음</h6>
        </div>
        <div className='checkList'>
          <input type='checkbox' />
          <span className={checked ? "checked" : null}>checkList</span>
        </div>
        <div className='inputBox'>
          <input type='text' />
          <button>입력</button>
        </div>
      </div>
    </div>
  );
}

export default App;
