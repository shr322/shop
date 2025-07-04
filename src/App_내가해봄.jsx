import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Row, Col, Nav, Card } from "react-bootstrap";
import { Routes, Route, useNavigate } from 'react-router-dom';
import data from './data';
import Detail from './pages/Detail_내가해봄';

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand><Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/2')}}>Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="main-bg"></div>

        <Routes>
          <Route path="/" element={
            <>
              <div>메인입니다.</div>
            </>
          }/>
          <Route path="/detail" element={
            <>
              <button onClick={()=>{
                const copy = [...shoes];
                copy.sort((a,b)=>{
                  if(a.title > b.title) return 1
                  if(a.title < b.title) return -1
                })
                setShoes(copy)
              }}>정렬</button>
              <Container>
                <Row>
                  {shoes.map((item)=>{
                    return <CardComponent item={item}/>
                  })}
                  
                </Row>
              </Container>
            </>
          } />
          <Route path="/2" element={<Detail></Detail>} />
          <Route path="*" element={<div>없음</div>} />
        </Routes>


        
      </div>
    </>
  );
}


function CardComponent(props){
  console.log(props.item.id)
  return (
    <>
      <Col xs={6} md={4}>
        <Card>
          <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${parseInt(props.item.id) + 1}.jpg`} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>{props.item.content}</Card.Text>
            <Card.Text>{props.item.price}원</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default App;
