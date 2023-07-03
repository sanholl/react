/* eslint-disable */ 
import './App.css';
import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import useUniqueIndex from './hooks/useUniqueIndex';
import CheckList from './components/CheckList';

const CircleButton = styled.button`
  background-color: #8a2be2;
  &:hover {
    background-color: #b370f2;
  }
  &:active {
    background-color: #5a05a9;
  }

  z-index: 5;
  width: 80px;
  height: 80px;
  border: none;
  font-size: 60px;
  color: white;
  position: absolute;
  bottom: -5%;
  left: 50%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  padding-bottom: 10px;

  transition: all 0.3s ease-out;
  
  ${props =>
    props.open &&
    css`
        background-color: #ff6b6b;
        &:hover{
          background-color: #ff8787;
        }
        &:active{
          background-color: #fa5252;
        }
        transform: translate(-50%) rotate(45deg);
      `}
  `;

function App() {

  let [list, setList] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [open, setOpen] = useState(false);

  let generateUniqueIndex = useUniqueIndex(); // unique index 생성 훅
  
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
        {
          list.length > 0 ? list.map((item) => (
            <CheckList item={item}/>
          )) : <h3 className='nothing'>데이터가 없습니다.</h3>
        }
        {
          open && <div className='inputBox'>
            <input type='text' onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setInputValue(e.target.value);
                setList([
                  ...list,
                  { key: generateUniqueIndex(), content: inputValue}
                ])
              }
            }} placeholder='할 일을 작성 후, Enter를 누르세요' />
          </div>
        }
        <CircleButton onClick={() => { setOpen(!open) }} open={open}>+</CircleButton>
      </div>
    </div>
  );
}



export default App;
