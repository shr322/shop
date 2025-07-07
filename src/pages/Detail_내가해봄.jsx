import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(props){
  const {id} = useParams();
  const [alertOnOff, setAlertOnOff] = useState(true)

  const findProduct = props.shoes.find((a)=>{
    return a.id == id;
  })


  useEffect(()=>{
    let a = setTimeout(() => {
      setAlertOnOff(false)
    }, 5000);

    return ()=>{
      clearTimeout(a)
    }
  }, [])

  return (
    <>
      {alertOnOff ? <div className="alert alert-warning">5초이내 구매시 할인</div> : null}
      <div className="card mb-3" >
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
    </>
  )
}
export default Detail;