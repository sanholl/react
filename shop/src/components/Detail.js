import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../store";

const Detail = (props) => {

  let { id } = useParams();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let cart = useSelector((state) => { return state.cart });
  let dispatch = useDispatch();

  useEffect(() => {
    // console.log('d') // mount, update시 실행
    setTimeout(() => { setAlert(false) }, 2000);
    return () => {
      // useEffect가 실행이 되기 전에 실행되는 코드
      setAlert(true);
    }
  }, [count])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${id}.jpg`} width="100%" />
        </div>
        {
          alert ? <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}>2초 이내 구매시 할인</div> : null
        }
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id - 1].title}</h4>
          <p>{props.shoes[id - 1].content}</p>
          <p>{props.shoes[id - 1].price}</p>
          <span>{count}</span>
          <button onClick={() => { setCount(count + 1) }}>+</button>
          <button onClick={() => { if (count > 0) { setCount(count - 1) } }}>-</button>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-danger" onClick={() => {
              let add = { id: props.shoes[id - 1].id, name: props.shoes[id - 1].title, count: 1 };
              dispatch(addCart(add))
            }}>주문하기</button>
          </div>
        </div>
      </div>
      <div className="row">
        <button style={{ display: 'inline-block' }}>버튼1</button>
        <button style={{ display: 'inline-block' }}>버튼1</button>
        <button style={{ display: 'inline-block' }}>버튼1</button>
      </div>
    </div>
  );
};

export default Detail;