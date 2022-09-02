import React, { useContext, useState } from "react";
import { CartDispatchContext, CartStateContext } from "../componentApi/Context";

function Counter(props, { id }) {
  // const [cost, setCost] = useState(0);
  // const [count, setCount] = useState(1);

  const dispatch = useContext(CartDispatchContext);
  const item = useContext(CartStateContext);

  const incrementCall = (id) => {
    console.log("increment call ");
    dispatch({
      type: "ADD",
      payload: id,
    });
  };

  // const decrementCall = () => {
  //   Decrement();
  //   props.Dec(cost);
  // };

  // const Increment = () => {
  //   setCount(count + 1);
  //   setCost(cost + props.price);
  // };

  // const Decrement = () => {
  //   if (count <= 1) setCount(1);
  //   else setCount(count - 1);
  //   if (count <= 1) setCost(0);
  //   else setCost(cost - props.price);
  // };

  const count = useContext(CartStateContext);
  const cost = useContext(CartDispatchContext);

  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div
            className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
            // onClick={() => props.Dec()}
            // onClick={decrementCall}
          >
            -
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
            {item.count}
          </div>
          <div
            className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
            onClick={() => incrementCall(id)}
          >
            +
          </div>

          {/* <b> ${cost} </b> */}
        </div>
      </div>
    </div>
  );
}

export default Counter;
