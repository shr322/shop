import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from './pages/Detail';

function App() {
  const [count, setCount] = useState(0);
  const [shoes, setShoes] = useState(data);

  const navigate = useNavigate();

  return (
    <>
      <div className="App">


        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      
      
        
        <Routes>
          <Route path="/" element={
            <div className="container">
              <div className="row">
                {shoes.map((item, i)=>{
                  return (
                    <Card item={item} i={i}/>
                  )
                })}
              </div>
            </div>
          }/>

          <Route path="/detail" element={<Detail/>}/>
          <Route path="/about" element={<About/>}>
            <Route path="member" element={<div>멤버</div>}/>
            <Route path="location" element={<div>지역</div>}/>
          </Route>

          <Route path="/event" element={<EventPage/>}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
          </Route>

          <Route path="*" element={<div>없는 페이지 입니다.</div>}/>
        </Routes>

      </div>
    </>
  )
}

function EventPage(){
  return (
    <div>
      <p>오늘의 이벤트</p>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <p>회사페이지임</p>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={`/shoes${props.item.id + 1}.jpg`} width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
    </div>
  )
}


export default App
