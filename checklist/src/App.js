import './App.css';
import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function App() {

  let [check, setCheck] = useState(false);
  let [list, setList] = useState();
  
  let today = new Date();
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let getFullDate = today.toLocaleDateString('ko-KR', options);
  let day = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  
  return (
    <div className="App center-container">
        {/* <Card style={{width: '70%', height: '80%', padding: '20px'}}>
          <Card.Title>{getFullDate}</Card.Title>
          <Card.Text>{day}</Card.Text>
          <ListGroup style={{ width: '100%', height: '100%' }}>
            <ListGroup.Item><input type="checkbox" /><span>checkList</span></ListGroup.Item>
          </ListGroup>
      </Card> */}
      <div className='main-card'>
        <h1>{getFullDate}</h1>
        <span>{day}</span>
        <div>
          <input type='checkbox' />
          <span>checkList</span>
        </div>
      </div>
    </div>
  );
}

export default App;
