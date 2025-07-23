import { useEffect, useState } from 'react'
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
import axios from 'axios'

/* 컴포넌트 */
import Detail from './pages/Detail';
import Cart from './pages/Cart'
import { useQuery } from "react-query";

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [shoes, setShoes] = useState(data);
  const [loading, setLoading] = useState(false);

  const [watchedArr, setWatchedArr] = useState([]);

  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청')
      return a.data
    })
  })


  useEffect(() => {
    const watched = !!JSON.parse(localStorage.getItem('watched'))
    if (watched) {
      setWatchedArr(JSON.parse(watched));
    } else {
      localStorage.setItem('watched', JSON.stringify([]));
      setWatchedArr([]);
    }
  }, []);

  return (
    <>
      <div className="App">
        <Navbar bg="white" variant="white">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}} >홈</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/event')}}>이벤트</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/cart')}}>카트</Nav.Link>
            </Nav>

            <Navbar className="ms-auto">
              {result.isLoading ? '로딩중' : result.data.name}
            </Navbar>
          </Container>
        </Navbar>
        

        <Routes>
          <Route path="/" element={
            <>
              {loading === true ? <div className="loading">로딩중</div> : null}
              
              <div className="main-bg">
                {!!JSON.parse(localStorage.getItem('watched')) ? JSON.parse(localStorage.getItem('watched'))[0] : null}
                <img width={80} src={`https://codingapple1.github.io/shop/shoes${JSON.parse(localStorage.getItem('watched'))[0] + 1}.jpg`} alt="" />
                
              </div>
              {count}
              <div className="container">
                <div className="row">
                  {shoes.map((item,i)=>{
                    return (
                      <Card key={i} shoes={shoes[i]} i={i} navigate={navigate}></Card>
                    )
                  })}
                </div>
              </div>

              <button onClick={()=>{
                const copy = JSON.parse(JSON.stringify(shoes)).sort((a,b)=>{
                  if(a.title > b.title) return 1;
                  if(a.title < b.title) return -1;
                })
                setShoes(copy)
              }}>정 렬</button>
              <button onClick={()=>{

                /* 리팩토링된 버전*/
                async function fetchData(url){
                  try {
                    setLoading(true)
                    const result = await axios.get(url)
                    setShoes((prev)=>{ return [...prev, ...result.data]});
                    setCount((prev)=>{ return prev + 1})
                    setLoading(false)
                  } catch(err){
                    console.log(err);
                  }
                }

                if(count === 0 ){
                  // 리팩토링 아닌 버전
                  // setLoading(true)
                  // axios.get('https://codingapple1.github.io/shop/data2.json')
                  // .then((result)=>{
                  //   const copy = JSON.parse(JSON.stringify(shoes));
                  //   copy.push(...result.data)
                    
                  //   /* 배열 + 배열할때 사용하는 방법 */
                  //   // const copy = [...shoes, ...result.data]
                  //   // const copy = JSON.parse(JSON.stringify(shoes)).concat(result.data);

                  //   setShoes(copy)
                  //   setCount(count+1)
                  //   setLoading(false)
                  // })
                  // .catch((err)=>{
                  //   console.log(err)
                  //   setCount(count+1)
                  //   setLoading(false)
                  // })

                  // 리팩토링 버전
                  fetchData('https://codingapple1.github.io/shop/data2.json');
                } else if(count === 1) {
                  // 리팩토링 아닌 버전
                  // setLoading(true)
                  // axios.get('https://codingapple1.github.io/shop/data3.json')
                  // .then((result)=>{
                  //   const copy = JSON.parse(JSON.stringify(shoes));
                  //   copy.push(...result.data)
                    
                  //   setShoes(copy)
                  //   setCount(count+1)
                  //   setLoading(false)
                  // })
                  // .catch((err)=>{
                  //   console.log(err)
                  //   setCount(count+1)
                  //   setLoading(false)
                  // })

                  // 리팩토링 버전
                  fetchData('https://codingapple1.github.io/shop/data3.json');
                } else {
                  setLoading(false);
                  alert('상품이 없어요');
                }


                /* 서버로 데이터 전송하는 법 */
                // axios.post('데이터 받는 주소', {name: 'sim'});

                /* 동시에 여러개 요청하는 법*/
                // Promise.all([ axios.get('경로1'), axios.get('경로2') ]).then(()=>{})

                /* fetch 사용법 */ 
                // fetch('경로').then((response)=>{return response.json()}).then((data)=>{return data})
              }}>더 보 기</button>
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

          <Route path="/cart" element={<Cart/>}></Route>
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
  return (
    <>
      <div className="col-md-4" onClick={()=>{props.navigate(`/detail/${props.shoes.id}`)}}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    </>
  )
}

export default App
