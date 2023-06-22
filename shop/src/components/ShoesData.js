import { Button, Nav, Navbar, NavDropdown, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShoesData = (props) => {

  let navigate = useNavigate();
  
  return (
    <Col sm={4}>
      <Card style={{ width: '100%', height: '100%' }} onClick={() => {
        localStorage.setItem('watched', JSON.stringify(props.shoes));
        navigate('/detail/' + (props.shoes.id + 1))
      }}>
        <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${props.shoes.id + 1}.jpg`}></Card.Img>
        {/* <Card.Img variant="top" src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg'}></Card.Img> */}
        <Card.Body>
          <Card.Title>{props.shoes.title}</Card.Title>
          <Card.Text>{props.shoes.content}</Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>{props.shoes.price}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default ShoesData;