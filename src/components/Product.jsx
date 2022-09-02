import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { createContext, useContext, useState } from "react";
import {
  CartDispatchContext,
  CartStateContext,
  useDispatchCart,
  useCart,
} from "../componentApi/Context";
import { ApiTopPropduct } from "../componentApi/TopProductsApi";
import Cart from "../pages/Cart";
// export const MyContext = React.createContext(0);

const Product = ({ item }, props) => {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }

  // const Product = ({ product }) => {
  // const dispatch = useDispatchCart();

  const carts = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleCartClick = (item) => {
    console.log("Item  :" + item.id);
    dispatch({ type: "ADD", item });

    carts.map((cart, index) => {
      {
        if (cart.id !== item.id) {
          console.log(
            `item no.  ${index} :   ${cart.title} item id: ${item.title}`
          );

          // let cc = [item];
        }
      }
    });

    // alert(`item added ${item.src}`);
  };

  // const handleCartClick = () => {
  //   console.log(`hello ${item.id}`);
  //   console.log(`Product src ${item.src}`);

  //   <MyContext.Provider value={{ item }}>
  //     <Cart />
  //   </MyContext.Provider>;

  // ApiTopProduct.filter((item) => {
  //   item
  // })

  // const search =   ApiTopPropduct.filter((item) =>
  // );
  // (feedback.filter((item) => item.id !== id)
  // };

  return (
    <div>
      <div
        className="flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverExit}
      >
        <img src={item.src} alt="product" />
        <div
          className={
            `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
            hoverEffects
          }
        >
          <div>{item.title}</div>
          <div className={iconStyle}>
            <ShoppingCartOutlined onClick={() => handleCartClick(item)} />
          </div>
          <div className={iconStyle}>
            <FavoriteBorderOutlined />
          </div>
          <div className={iconStyle}>
            <SearchOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
