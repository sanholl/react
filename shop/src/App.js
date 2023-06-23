import { Button, Nav, Navbar, NavDropdown, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './App.css';
import mainBg from './img/bg.png';
import shoeData from './data.js'
import { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query'; 

import ShoesData from './components/ShoesData.js';
import Detail from './components/Detail.js';
import About from './components/About.js';


function App() {

  let [shoes, changeValue] = useState(shoeData);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
  let watchedData = localStorage.getItem('watched');
  let watched = JSON.parse(watchedData);

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify({}));
  }, []);

  // let result = useQuery('작명', () => {
  //   return axios.get('https://codingapple1.github.io/userdata.json')
  //     .then((a) => { return a.data })
  // });
  // {} 제거로 return 생략
  let result = useQuery(['작명'], () => 
    axios.get('https://codingapple1.github.io/userdata.json')
      .then((a) => { return a.data })
  );

  return (
    <div className="App">


      {/* <Link to="/" className='link'>홈</Link>
      <Link to="/detail" className='link'>상세페이지</Link> */}

      {/* <Button variant='primary'>버튼</Button> */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href='#' onClick={() => { navigate('/') }}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown" onClick={() => { navigate('/about') }}>
                <NavDropdown.Item onClick={() => { navigate('member') }}>Member</NavDropdown.Item>
                <NavDropdown.Item >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => { navigate('/about/location') }}>Location</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className='ms-auto'>Hello {result.isLoading ? '로딩중' : result.data.name}</Nav>
        </Container>
      </Navbar>

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
                <div className='stickyCard'>
                  <Card>
                    <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${watched.id + 1}.jpg`}></Card.Img>
                    <Card.Body>
                      <Card.Title>{watched.title}</Card.Title>
                      <Card.Text>최근 본 상품</Card.Text>
                    </Card.Body>
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
