import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from "react-router-dom"

import About from './pages/About_연습.jsx';
import Main from './pages/Main_연습.jsx';
import DetailList from './pages/DetailList_연습.jsx';
import Detail from './pages/Detail_연습';
import Cart from './pages/Cart_연습';

import Data from './data.js'


function App() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const [shoes, setShoes] = useState(Data)

  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    if(!!JSON.parse(localStorage.getItem('task'))){
      localStorage.setItem('task',JSON.stringify(JSON.parse(localStorage.getItem('task'))));
    } else {
      localStorage.setItem('task',JSON.stringify([]));
    }
    }, [])

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand onClick={()=>{navigate('/')}}>shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/cart')}}>cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>



      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>}></Route>
        <Route path="/detail" element={<DetailList setLoading={setLoading} loading={loading} count={count} setCount={setCount} navigate={navigate} setShoes={setShoes} shoes={shoes} />}></Route>
        <Route path="/detail/:paramId" element={<Detail shoes={shoes}/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/cart"  element={<Cart shoes={shoes}/>}></Route>
        <Route path="*"  element={<div>없는페이지</div>}></Route>
      </Routes>
    </>
  );
}


export default App;