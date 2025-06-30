import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 추가 */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import styleBg from './bg.png';
/* import export할때 여러개 불러오는 경우에는 변수명을 js파일과 동일하게 해야한다. */
import data from './data';
import {a,b} from './import_export_test';
/* import export할때 여러개 불러오는 경우에는 변수명을 js파일과 동일하게 해야한다. */

/* 컴포넌트 */
import Detail from './pages/Detail';

function App() {
  const [count, setCount] = useState(0);
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}} >홈</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/event')}}>이벤트</Nav.Link>
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

          <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

          <Route path="/about" element={<About navigate={navigate}/>}>
            <Route path="member" element={<div>멤버</div>}></Route>
            <Route path="location" element={<div>로케이션</div>}></Route>
          </Route>

          <Route path="/event" element={<EventPage navigate={navigate}/>}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
        </Routes>


      </div>
    </>
  )
}

function EventPage(props){
  return (
    <div>
      <Nav.Link onClick={()=>{props.navigate('/event/one')}} >이벤트1</Nav.Link>
      <Nav.Link onClick={()=>{props.navigate('/event/two')}} >이벤트2</Nav.Link>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}

function About(props){
  return (
    <div>
      <Nav.Link onClick={()=>{props.navigate('/about/member')}} >멤버</Nav.Link>
      <Nav.Link onClick={()=>{props.navigate('/about/location')}} >로케이션</Nav.Link>
      <p>회사페이지임</p>
      <Outlet></Outlet>
    </div>
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
