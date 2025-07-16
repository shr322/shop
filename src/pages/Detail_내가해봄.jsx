import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

function Detail(props){
  const {id} = useParams();
  const [alertOnOff, setAlertOnOff] = useState(true)
  const [tab, setTab] = useState(0);
  const tabs = ['1','2','3'];
  const findProduct = props.shoes.find((a)=>{
    return a.id == id;
  })

  const [fade2, setFade2] = useState('');



  useEffect(()=>{
    let a = setTimeout(() => {
      setAlertOnOff(false)
    }, 5000);

    return ()=>{
      clearTimeout(a)
    }
  }, [])


  useEffect(()=>{
    const a = setTimeout(()=>{
      setFade2('end')
    }, 10)

    return ()=>{
      setFade2('');
      clearTimeout(a);
    }
  }, [])

  return (
    <>
      <div className={"card mb-3 start " + fade2} >
        {alertOnOff ? <div className="alert alert-warning">5초이내 구매시 할인</div> : null}
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(findProduct.id) + 1}.jpg`} className="img-fluid rounded-start"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{findProduct.title}</h5>
              <p className="card-text">{findProduct.content}</p>
              <p className="card-text"><small className="text-body-secondary">{findProduct.price}</small></p>
            </div>
          </div>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        {tabs.map((item,i)=>{
          return (
            <>
              <Nav.Item>
                <Nav.Link eventKey={`link${i}`} onClick={()=>{
                  setTab(i)
                }}>버튼{i}</Nav.Link>
              </Nav.Item>
            </>
          )
        })}
      </Nav>

      <TabContent shoes={props.shoes} tab={tab}/>
    </>
  )
}

function TabContent({tab,shoes}){
  const [fade, setFade] = useState('');

  useEffect(()=>{
    const a = setTimeout(()=>{
      setFade('end')
    }, 10)

    return ()=>{
      setFade('');
      clearTimeout(a);
    }
  }, [tab])

  return (
    <div className={`start ${fade}`}>
      {[
        <div>{shoes[tab].title}</div>,
        <div>{shoes[tab].title}</div>,
        <div>{shoes[tab].title}</div>
      ][tab]}
    </div>
  )
}


export default Detail;