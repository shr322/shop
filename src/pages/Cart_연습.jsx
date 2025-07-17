import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addItem, removeItem, changeName, increaseAge } from "../store_연습";

function Cart(){

  let cart = useSelector((state)=> state.cart )
  let user = useSelector((state)=> state.user )
  let dispatch = useDispatch();

  return (
    <>
      {user.name} / {user.age}
      <div>
        <button onClick={()=>{dispatch(changeName())}}>이름변경</button>
        <button onClick={()=>{dispatch(increaseAge(1))}}>나이증가</button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item)=>{
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td></td>
                  <td>
                    <button onClick={()=>{
                      dispatch(addCount(item.id))
                    }}>증가</button>
                  </td>
                  <td>
                    <button onClick={()=>{
                      dispatch(removeItem(item.id))
                    }}>삭제</button>
                  </td>
                </tr>
              )
            })
          }
          
        </tbody>
        
      </Table> 
    </>
  )
}

export default Cart;