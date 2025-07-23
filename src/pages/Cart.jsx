import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "../store/userSlice";
import { addCount } from "../store";
import { memo, useMemo, useState } from "react";

// memo 사용법
// function Child(){
//   console.log('재렌더링됨');
//   return <div>자식임</div>
// }
let Child = memo(function(){
  console.log('재렌더링됨');
  return <div>자식임</div>
})

// useMemo 예시
// function 함수(){
//   return 반복문10억번돌린결과
// }

function Cart(){
  const state = useSelector((state)=> state );

  const dispatch = useDispatch();
  
  // memo 사용법
  const [count, setCount] = useState(0);

  // useMemo 예시 / useEffect랑 유사 / 컴포넌트 로드시 1회만 실행
  // let result = useMemo(()=>{ return 함수()}, [])

  return (
    <>
      {/* memo 사용법 */}
      <Child/>
      <button onClick={()=>{ setCount((prev)=> prev+1) }}> {count}+ </button>
      {/* memo 사용법 */}

      {state.user.name} 장바구니
      <button onClick={()=>{dispatch(increase(100))}}>버튼</button>
      {state.user.age}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          
          {state.cart.map((item,i)=>{
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>{item.id}</td>
                <td><button onClick={()=>{
                  dispatch(addCount(item.id))
                }}>클릭</button></td>
              </tr>
            )
          })}
          
        </tbody>
      </Table> 
    </>
  )
}

export default Cart;