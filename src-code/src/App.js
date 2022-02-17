import { Fragment, useState } from "react";
import Cart from "./components/CART/Cart";
import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";
import CartProvider from "./components/store/cartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>c
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
