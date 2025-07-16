import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "../store/userSlice";
import { addCount } from "../store";

function Cart(){
  const state = useSelector((state)=> state );

  const dispatch = useDispatch();

  return (
    <>
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