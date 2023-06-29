import { Row, Card, ListGroup } from 'react-bootstrap';
import './App.css';
import mainBg from './img/bg.png';
import shoeData from './data.js'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query'; 

import ShoesData from './components/ShoesData.js';
import Detail from './components/Detail.js';
import About from './components/About.js';
import Cart from './components/Cart.js';
import Header from './components/Header.js';


function App() {

  let [shoes, changeValue] = useState(shoeData);
  let [count, setCount] = useState(0); // 목록 불러오는 데이터 count
  let [count2, setCount2] = useState(0); // setState 오류로 인한 useEffect용 count
  let [loading, setLoading] = useState(false);

  let watchedData = localStorage.getItem('watched');
  let watched = JSON.parse(watchedData);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify({}));
  }, []);
  
  useEffect(() => {}, [count2]);

  return (
    <div className="App">
      <Header/>
      {
        loading ? <div className='loading'>
          <span>Loading...</span>
        </div> : null
      }
      <Routes>
        <Route path='/' element={
          <>
            <div style={{ backgroundImage: 'url(' + mainBg + ')', height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {
                watched.id !== undefined &&
                <div className='fixedCard'>
                  <Card>
                    <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${watched.id + 1}.jpg`}></Card.Img>
                    <Card.Body>
                      <Card.Title>{watched.title}</Card.Title>
                      <Card.Text>최근 본 상품</Card.Text>
                    </Card.Body>
                    <ListGroup className='list-group-flush'>
                      <ListGroup.Item>
                        <input type='checkbox' />
                        <span>오늘하루 보지 않기</span>
                        <button onClick={() => {
                          localStorage.setItem('watched', JSON.stringify({}));
                          setCount2(count2 + 1)
                        }}>닫기</button></ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
            }
            <button onClick={() => {
              let copy = [...shoes];
              copy.sort((a, b) => a.price - b.price);
              changeValue(copy);
            }}>가격 정렬</button>
            <button onClick={() => {
              let copy = [...shoes];
              copy.sort((a, b) => a.title.localeCompare(b.title));
              changeValue(copy);
            }}>이름 정렬</button>
            <button onClick={() => {
              let copy = [...shoes];
              copy.sort((a, b) => a.id - b.id);
              changeValue(copy);
            }}>초기화</button>
            <button onClick={() => {
              setLoading(true);
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((data) => {
                  setLoading(false);
                  let size = data.data.length;
                  setCount(count + 1);
                  if (count < size) {
                    let copy = [...shoes];
                    copy.push(data.data[count]);
                    changeValue(copy);
                  } else {
                    alert('추가할 데이터가 없습니다.')
                  }
                })
                .catch(() => {
                  setLoading(false);
                  alert('요청 실패');
                })
            }}>데이터 추가</button>

            <Row style={{ marginTop: '20px' }}>
              {
                shoes.map((a, i) => {
                  return (
                    <ShoesData shoes={a} />
                  )
                })
              }
            </Row>
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>Member</div>} />
          <Route path='location' element={<div>Location</div>} />
        </Route>
        <Route path='*' element={<div>없는 페이지 404</div>} />
      </Routes>

      {/* <div style={{ backgroundImage: 'url(' + mainBg + ')', height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      <Row style={{marginTop : '20px'}}>
        {
          shoes.map((a, i) => {
            return (
              <ShoesData shoes={a} />
            )
          })
        }
      </Row> */}

    </div>
  );
}


export default App;
