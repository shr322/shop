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
  const [alertState, setAlertState] = useState(true)
  const [inp, setinp] = useState('');

  /**
   * useEffect는
   * mount,update시 실행됨
   * 
   * 1. 이러면 재렌더링마다 코드를 실행가능합니다.
   * useEffect(()=>{ 실행할코드 })
   * 
   * 2. 이러면 컴포넌트 mount시 (로드시) 1회만 실행가능합니다.
   * useEffect(()=>{ 실행할코드 }, [])
   * 
   * 3. 이러면 useEffect 안의 코드 실행 전에 항상 실행됩니다. 
   * useEffect(()=>{ return ()=>{ 실행할코드 }})
   * 
   * 4. 이러면 컴포넌트 unmount시 1회 실행됩니다.
   * useEffect(()=>{return ()=>{실행할코드}}, [])
   * 
   * 5. 이러면 state1이 변경될 때만 실행됩니다. 
   * useEffect(()=>{실행할코드}, [state1])
   * */
  useEffect(()=>{
    let a = setTimeout(() => {
      setAlertState(false)
    }, 2000);
    
    return()=>{
      clearTimeout(a)
    }
  })

  useEffect(()=>{
    if(isNaN(inp)){
      alert('숫자가 아닙니다')
    }
  },[inp])

  
  return (
    <div className="container">
      {count}<button onClick={()=>{
        setCount(count+1);
      }}>버튼</button>

      { alertState ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}


      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(찾는상품.id) + 1}.jpg`} width="100%" />
        </div>
        <input type="text" onChange={(e)=>{
          setinp(e.target.value)
        }}/>
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