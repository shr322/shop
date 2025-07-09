import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

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
  const [tab, setTab] = useState(0);

  const [fade, setFade] = useState('');

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

  useEffect(()=>{
    setFade('open')
  }, [])
  
  return (
    <div className={`container detail ${fade}`}>
      {count}<button onClick={()=>{
        setCount(count+1);
      }}>버튼</button>

      { alertState ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}


      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(찾는상품.id) + 1}.jpg`} width="100%" />
        </div>
        
        <div className="col-md-6">
          <input type="text" onChange={(e)=>{
            setinp(e.target.value)
          }}/>
          <h4 className="pt-5">{찾는상품.title}</h4>
          <p>{찾는상품.content}</p>
          <p>{찾는상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>


      <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{
              setTab(0)
            }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{
              setTab(1)
            }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{
              setTab(2)
            }}>버튼2</Nav.Link>
          </Nav.Item>
      </Nav>
      <TabContent tab={tab} setTab={setTab}/>
    </div> 
  )
}

function TabContent({tab}){

  const [fade, setFade] = useState('');

  /**
   * useEffect에서 setTimeout사용하는 이유는
   * 리액트 18버전 이상부터는 Automatic Batching라는 기능이 추가됨.
   * 해당 기능은 state 변경함수들이 연달아서 여러개 처리되어야 한다면
   * state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링된다. 
  */
  useEffect(()=>{
    const timer = setTimeout(() => {
      setFade('end')
    }, 10);

    return ()=>{
      clearTimeout(timer);
      setFade('')
    }
  }, [tab])

  // if(tab == 0){ return <div>1</div> }
  // if(tab == 1){ return <div>2</div> }
  // if(tab == 2){ return <div>3</div> }
  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>1</div>,
          <div>2</div>,
          <div>3</div>
        ][tab]
      }
    </div>
  )
}


export default Detail;