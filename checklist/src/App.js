/* eslint-disable */ 
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import useUniqueIndex from './hooks/useUniqueIndex';
import CheckList from './components/CheckList';
import InputBox from './components/InputBox';
import Header from './components/Header';

function App() {

  let [list, setList] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [open, setOpen] = useState(false);

  let generateUniqueIndex = useUniqueIndex(); // unique index 생성 훅
  
  let remainingQuantity = list.filter((item) => { return item.type === 'show' }).length;
  let notRemoved = list.filter((item) => { return item.type !== 'hide' }).length;

  // useCallback을 이용하면 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 것을 피할 수 있다.
  const handleRemove = useCallback((id) => { 
    setList(prevList =>
      prevList.map(item => (
        item.key === id ? { ...item, type: 'removed' } : item
      ))
    );
  }, []);

  const handleChecked = useCallback((id, checked) => {
    setList(prevList =>
      prevList.map(item => {
        if (checked) {
          return item.key === id ? { ...item, type: 'show' } : item
        } else {
          return item.key === id ? { ...item, type: 'checked' } : item
        }
      })
    );
  }, []);

  const handleInputValue = useCallback((value) => {
    setInputValue(value);
  }, []);

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
        <Header value={ remainingQuantity } />
        <div className='listBox'>
          {
            notRemoved > 0 ? list.map((item) => (
              <CheckList item={item} onRemove={handleRemove} onChecked={handleChecked} />
          )) : <h3 className='nothing'>할 일이 없습니다.</h3>
          }
        </div>
        <InputBox onInputValue={handleInputValue} />
      </div>
    </div>
  );
}



export default App;
