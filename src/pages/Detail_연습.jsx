import { useNavigate, useParams } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../store_연습";

function Detail(props){
  const {paramId} = useParams();

  const currentProduct = props.shoes.find((a)=>{
    return a.id == paramId
  })

  const navigate = useNavigate();

  const [tabIndex, setTabIndex] = useState(0);
  const [fade, setFade] = useState('end')

  let dispatch = useDispatch();

  useEffect(()=>{
    const copy = localStorage.getItem('task');
    const arr = JSON.parse(copy);
    arr.unshift(currentProduct.id)

    localStorage.setItem('task',JSON.stringify([...new Set(arr)]))
  }, [])

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${currentProduct.id + 1}.jpg`} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{currentProduct.title}</h5>
              <p className="card-text">{currentProduct.content}</p>
              <p className="card-text"></p>
              <p className="card-text"><small className="text-body-secondary">{currentProduct.price}</small></p>
              <Button variant="primary" onClick={()=>{
                dispatch(addItem(currentProduct))
              }}>카트추가</Button>
            </div>
          </div>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        {props.shoes.map((item,i)=>{
          return (
            <Nav.Item key={i}>
              <Nav.Link eventKey={`link${i}`} onClick={()=>{
                setTabIndex(i);
              }}>버튼{i}</Nav.Link>
            </Nav.Item>
          )
        })}
      </Nav>

      <TabContent fade={fade} setFade={setFade} tabIndex={tabIndex} shoes={props.shoes}/>
    </>
  )
}


function TabContent(props){
  
  useEffect(()=>{
    let a = setTimeout(() => {
      props.setFade('end')
    }, 50);

    return ()=>{
      clearTimeout(a);
      props.setFade('')
    }
  }, [props.tabIndex])
  return (
    <>
      <div className={`start ${props.fade}`}>
        {
          props.shoes.map((item, i)=>{return <div>{props.shoes[props.tabIndex].title}</div>})[props.tabIndex]
        }
      </div>
    </>
  )
}

export default Detail;