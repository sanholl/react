/* eslint-disable */ 
import './App.css';
import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styled, { css } from 'styled-components';

import useUniqueIndex from './hooks/useUniqueIndex';
import CheckList from './components/CheckList';

const AddButton = styled.button`
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

  let remainingQuantity = list.filter((item) => { return item.type === 'show' }).length;
  let notRemoved = list.filter((item) => { return item.type !== 'hide' }).length;

  function handleRemove(id) {
    setList(
      list.map(item => (
        item.key === id ? { ...item, type: 'removed' } : item
      ))
    );
  };
  function handleChecked(id, checked) {
    setList(
      list.map(item => {
        if (checked) {
          return item.key === id ? { ...item, type: 'show' } : item
        } else {
          return item.key === id ? { ...item, type: 'checked' } : item
        }
      })
    );
  };

  useEffect(() => {
    if (inputValue !== '') {
      setList([
        ...list,
        { key: generateUniqueIndex(), content: inputValue, type: 'show' }
      ])
      setInputValue('');
    }
  }, [inputValue]);

  useEffect(()=>{},[list])

  return (
    <div className="App center-container">
      <div className='main-card'>
        <div className='header'>
          <h1>{getFullDate}</h1>
          <span>{day}</span>
          <h6>할 일 { remainingQuantity }개 남음</h6>
        </div>
        <div className='listBox'>
          {
            notRemoved > 0 ? list.map((item) => (
              <CheckList item={item} onRemove={handleRemove} onChecked={handleChecked} />
          )) : <h3 className='nothing'>할 일이 없습니다.</h3>
          }
        </div>
        {
          open && <div className='inputBox'>
            <input type='text' onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setInputValue(e.target.value);
                setOpen(false);
              }
            }} placeholder='할 일을 작성 후, Enter를 누르세요' />
          </div>
        }
        <AddButton onClick={() => { setOpen(!open) }} open={open}>+</AddButton>
      </div>
    </div>
  );
}



export default App;
