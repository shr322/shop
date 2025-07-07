import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Row, Col, Nav, Card } from "react-bootstrap";
import { Routes, Route, useNavigate, Outlet, useMatch } from 'react-router-dom';
import data from './data';
import Detail from './pages/Detail_내가해봄';
import axios from "axios";

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const match = useMatch('/detail')

  const [loadOfOff, setLoadOfOff] = useState(true)

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand><Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="main-bg"></div>

        <Routes>
          {/* 메인 */}
          <Route path="/" element={
            <>
              <div>메인입니다.</div>
            </>
          }/>
          {/* 메인 */}

          {/* 상세페이지 목록 */}
          <Route path="/detail" element={
            <>
              <DetailList loadOfOff={loadOfOff} setLoadOfOff={setLoadOfOff} navigate={navigate} shoes={shoes} setShoes={setShoes}/>
              {loadOfOff ? <div className="loading">로딩중</div> : null}
            </>
          }>
          </Route>
          {/* 상세페이지 목록 */}

          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>

          <Route path="/about" element={<div>about</div>}></Route>

          <Route path="*" element={<div>없음</div>} />
        </Routes>


        
      </div>

      
    </>
  );
}


function CardComponent(props){
  return (
    <>
      <Col xs={6} md={4}>
        <Card>
          <Card.Img variant="top" src={`https://codingapple1.github.io/shop/shoes${parseInt(props.item.id) + 1}.jpg`} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>{props.item.content}</Card.Text>
            <Card.Text>{props.item.price}원</Card.Text>
            <Button variant="primary" onClick={()=>{props.navigate(`/detail/${props.item.id}`)}}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

function DetailList(props){
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    props.setLoadOfOff(false)  
  }, [])

  return (
    <>
      <button onClick={()=>{
        const copy = [...props.shoes];
        copy.sort((a,b)=>{
          if(a.title > b.title) return 1
          if(a.title < b.title) return -1
        })
        props.setShoes(copy)
      }}>정렬</button>
      <button onClick={()=>{
        
        async function fetchData(url) {
          try{
            props.setLoadOfOff(true)
            const result = await fetch(url);
            const data = await result.json();
            const copy = [...props.shoes, ...data];
            props.setShoes(copy)
            setCount(count + 1);
          } catch(err){
            console.log(err)
          } finally {
            console.log('호출완료')
              props.setLoadOfOff(false)  
          }
        }

        if(count === 0){
          fetchData('https://codingapple1.github.io/shop/data2.json')
          console.log(count)
        } else if(count === 1) {
          fetchData('https://codingapple1.github.io/shop/data3.json')
          console.log(count)
        } else {
          props.setLoadOfOff(false)
          alert('불러올 상품이 없음')
        }
      }}>더보기</button>
      <Container>
        <Row>
          {props.shoes.map((item,i)=>{
            return <CardComponent key={i} navigate={props.navigate} item={item}/>
          })}
        </Row>
      </Container>
    </>
  )
}

export default App;
