import React, { useReducer, useState } from "react";
import Annoucne from "../components/Annoucne";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Summary from "../components/Summary";
import { FiberDvr } from "@material-ui/icons";
import { MyContext } from "../components/Product";
import {
  CartDispatchContext,
  CartStateContext,
  useCart,
  useDispatchCart,
} from "../componentApi/Context";
import { useContext } from "react";

const Cart = ({ product }) => {
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState(0);

  function Inc(props) {
    setCount(count + 1);
    // setCost(cost + 70);
    console.log(`cost of : ${cost}`);
  }
  function Dec() {
    if (count <= 0) setCount(0);
    else setCount(count - 1);
    if (count !== 0) {
      if (cost <= 0) setCost(0);
      else setCost(cost - 70);
    }
  }

  // const {  items } = useContext(CartDispatchContext);
  const items = useContext(CartStateContext);
  console.log("I am cart: item:: ", items.count);

  // const items = useCart();
  const dispatch = useContext(CartDispatchContext);
  console.log("I am cart: dispatch::", dispatch);

  items.map((item, index) => {
    console.log("item : count " + item.count);
    console.log("items price : " + item.price);
  });

  // const items = useCart();
  // const dispatch = useDispatchCart();
  // const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
  let totalAmount;
  const shipping = 100;
  const discount = -10;

  if (count === 0) totalAmount = 0;
  else totalAmount = cost + shipping + discount;

  const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
  const PriceQuantityStyle =
    "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  let itemLength;

  if (items.length === 0) {
    itemLength = "Cart Is Empty";
  }
  // const image = useContext(CartStateContext);
  // const CartStateContext = createContext();
  // const CartDispatchContext = createContext();

  // const Incrementcall = (id) => {
  //   dispatch({});
  // };

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const handleRemoveAll = (item) => {
    dispatch({ type: "REMOVEALL", item });
  };

  return (
    <div>
      <Annoucne />
      <Navbar />
      <div className="p-3">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex justify-center">
          <button className="btn" onClick={() => handleRemoveAll()}>
            Remove All
          </button>
        </div>
        <div className={ProductDivStyle}>
          <h1 className="align-center justify-center text-6xl ">
            {itemLength}
          </h1>

          {/* {items.map((item, index) => (
            <img src={item.src} key={index} alt="not found" />
          ))} */}
          {/* {items.src} */}
          {/* {items.title} */}
          {/* <MyContext.Consumer> */}
          {/* const productList = cartItems.find((item) => item.id === product.id) */}
          {/* {(value) => {
              // <img src={value.src} alt="product" />;
              <div>{value.src}</div>; */}
          {/* }} */}
          {/* </MyContext.Consumer> */}
        </div>
        {/* upper buttons div */}

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          {/* product div */}
          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            {items.map((item, index) => (
              <div className={ProductDivStyle}>
                <div className=" product flex pl-5 self-start">
                  <img
                    className="product_img w-[7rem]"
                    src={item.src}
                    key={index}
                    alt="product_img"
                  />

                  <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                    <p>
                      <b className="mr-2">ID:</b>
                      {item.id}
                    </p>
                    <p>
                      <b className="mr-2">Product:</b>
                      {item.title}
                    </p>
                    <p className="flex items-center justify-center">
                      <b className="mr-2">Color:</b>
                      <div className="colorSelect bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                    </p>
                    <p>
                      <b className="mr-2">Size:</b>M
                    </p>
                  </div>
                </div>

                {/*Price and Quantity Div*/}
                <div className={PriceQuantityStyle}>
                  {/* //////////////////////////////////////////// */}
                  {/* <Counter price={item.price} Dec={Dec} Inc={Inc} /> */}
                  {/* //////////////////////////////////////////// */}

                  <div className="ml-5 shadow-md flex">
                    <div
                      className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
                      // onClick={Decrement}
                    >
                      -
                    </div>
                    <div
                      className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]"
                      // placeholder={count}
                    >
                      {item.count}
                    </div>
                    {/* <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
                    {/* <input
                      type="number"
                      name="c"
                      id=""
                      onClick={() => dispatch({type : "ADD" , payload})}
                      placeholder={items.count}
                    />{" "} */}
                    {/* </div> */}
                    <div
                      className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
                      // onClick={() => Incrementcall(id)}
                    >
                      +
                    </div>
                  </div>

                  <p className="flex items-center justify-center text-4xl mt-3">
                    <b>${item.price}</b>
                  </p>
                  <div>
                    {" "}
                    <button
                      className="bg-red-500 hover:bg-red-800 hover:scale-[1.1] text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-blue-500 rounded mb-4"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <hr className="mb-8 mt-7 mobile:mt-0" />
              </div>
            ))}
          </div>
          {/* <Summary Total={cost} /> */}
          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>$ {cost}</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>${shipping}</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>${discount}</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>${totalAmount}</p>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

// const CartItem = ({ product, index, handleRemove }) => {
//   <article>
//     <div className="dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
//       <div className="dtc w3">
//         <img src={product.src} className="db w-100" />
//       </div>
//       <div className="dtc v-top pl2">
//         <h1 className="f6 f5-ns fw6 lh-title black mv0">{product.id}</h1>
//         <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
//         <div className="mt2 f6">
//           <div className="clip">Price</div>
//           <div className="ml0">
//             {/* {product.price.toLocaleString("en", {
//               style: "currency",
//               currency: "USD",
//             })} */}
//           </div>
//         </div>
//         {/* <button onClick={() => handleRemove(index)}>Remove from cart</button> */}
//       </div>
//     </div>
//   </article>;
// };

// export default function Cart() {
//   const items = useCart();
//   const dispatch = useDispatchCart();
//   console.log(items);
//   // const dispatch = useDispatchCart();
//   const totalPrice = 0;
//   // const totalPrice = items.reduce((total, b) => total + b.price, 0);

//   const handleRemove = (index) => {
//     dispatch({ type: "REMOVE", index });
//   };

//   // if (items.length === 0) {
//   //   return (
//   //     <main>
//   //       <p>Cart is empty</p>
//   //     </main>
//   //   );
//   // }
//   return (
//     <main>
//       {/* <p>
//         Total price:{" "}
//         {totalPrice.toLocaleString("en", {
//           style: "currency",
//           currency: "USD",
//         })}
//       </p> */}
//       {items.map((item, index) => (
//         <CartItem
//           handleRemove={handleRemove}
//           key={index}
//           product={item}
//           index={index}
//         />
//       ))}
//     </main>
//   );
// }
