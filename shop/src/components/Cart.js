import { Button, Table } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { changeName, minusCount, plusCount, removeCart } from '../store.js';
import { memo, useMemo, useState } from 'react';

let Child = memo(function() {
  console.log('wktlr')
  return <div>자식</div>
})

function 함수() {
  return '반복문 10억번'
}

function Cart() {

  let result = useMemo(() => { return 함수() }, []);

  let redux = useSelector((state) => { return state });
  let user = useSelector((state) => { return state.user });
  let cart = useSelector((state) => { return state.cart })
  let dispatch = useDispatch();
  // console.log(redux)
  // console.log(user)

  let [count, setCount] = useState(0);
  
  return (
    <>
      <Child></Child>
      <Button onClick={()=>{ setCount(count + 1)}}>+</Button>
      {cart.length > 0 ? <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((a, i) =>
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{a.name}</th>
                <th>
                  <button onClick={() => {
                    dispatch(minusCount(a.id))
                  }}>-</button>
                  {a.count}
                  <button
                    onClick={() => {
                      dispatch(plusCount(a.id))
                    }}>+</button>
                </th>
                <th onClick={() => {
                  dispatch(removeCart(a.id))
                }}>삭제하기</th>
              </tr>
            )
          }
        </tbody>
      </Table> : <div style={{ marginTop: '100px' }}>장바구니에 담긴 상품이 없습니다.</div>
      }
    </>
  )
}

export default Cart;