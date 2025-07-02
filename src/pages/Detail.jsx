import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


/* Lifecycle hook 예전 방식 */
// class Detail2 extends React.Component {
//   componentDidMount(){
//     //Detail2 컴포넌트가 로드되고나서 실행할 코드
//   }
//   componentDidUpdate(){
//     //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
//   }
//   componentWillUnmount(){
//     //Detail2 컴포넌트가 삭제되기전에 실행할 코드
//   }
// }


/**
 * 컴포넌트는
 * 1. 생성이 될 수도 있고 (전문용어로 mount) -> 실행할 코드를 고리로 걸어두는거
 * 2. 재렌더링이 될 수도 있고 (전문용어로 update) -> 실행할 코드를 고리로 걸어두는거
 * 3. 삭제가 될 수도 있습니다. (전문용어로 unmount) -> 실행할 코드를 고리로 걸어두는거
 * 
 * 실행할 코드를 고리로 걸어두는거를 Lifecycle hook이라함
*/

function Detail(props){

  

  let [count, setCount] = useState(0);
  const {id} = useParams();
  let 찾는상품 = props.shoes.find((a,b)=>{ return a.id == id })
  const [alert, setAlert] = useState(true)


  useEffect(()=>{
    setTimeout(() => {
      setAlert(false)
    }, 2000);
  })
  
  return (
    <div className="container">
      <button onClick={()=>{
        setCount(count+1);
      }}>버튼</button>

      { alert ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(찾는상품.id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾는상품.title}</h4>
          <p>{찾는상품.content}</p>
          <p>{찾는상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}
export default Detail;