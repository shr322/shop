import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props){
  const {paramId} = useParams();

  const currentProduct = props.shoes.find((a)=>{
    return a.id == paramId
  })

  
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
            </div>
          </div>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{
            }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{
            }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{
            }}>버튼2</Nav.Link>
          </Nav.Item>
      </Nav>

      <TabContent />
    </>
  )
}


function TabContent(){
  return (
    <>
      <div>1</div>
    </>
  )
}

export default Detail;