import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import {Routes, Route, Link} from 'react-router-dom';
import Test from './컴포넌트'


function App() {
  const [count, setCount] = useState(0);

  const [shoes, setShoes] = useState(data);


  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">홈</Link></Nav.Link>
              <Nav.Link><Link to="/detail">상세페이지</Link></Nav.Link>
              <Nav.Link><Link to="/about">어바웃페이지</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        

        <Routes>
          <Route path="/" element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((item,i)=>{
                    return (
                      <Card key={i} shoes={shoes[i]} i={i}></Card>
                    )
                  })}
                </div>
              </div>
            </>
          }/>
          <Route path="/detail" element={<Test/>}/>
          <Route path="/about" element={<div>어바웃페이지</div>}/>
        </Routes>


      </div>
    </>
  )
}

function Card(props){
  const shoes = props.shoes;
  const i = props.i
  
  return (
    <>
      <div className="col-md-4">
        <img src={`/shoes${i+1}.jpg`} width="80%" />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </div>
    </>
  )
}

export default App
