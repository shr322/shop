import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 추가 */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styleBg from './bg.png';
import data1 from './data';
/* import export할때 여러개 불러오는 경우에는 변수명을 js파일과 동일하게 해야한다. */
import {a,b} from './import_export_test';

function App() {
  const [shoes, setShoes] = useState(data1)

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="main-bg"></div>
        {/* <div className="main-bg" style={{background: `url(${styleBg})`}}></div> */}

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/shoes1.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
            <div className="col-md-4">
              <img src="/shoes2.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
            <div className="col-md-4">
              <img src="/shoes3.jpg" width="80%" />
              <h4>상품명</h4>
              <p>상품정보</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
