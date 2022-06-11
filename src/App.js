import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data1 from "./data1";
import data2 from "./data2";
import { useState } from "react";
function App() {
  const { productList1 } = data1;
  const { productList2 } = data2;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <div style={{ display: "flex", flexDirection: "column", flex: 3 }}>
          <h2>Cosmetics</h2>
          <Main products={productList1} onAdd={onAdd}></Main>
          <h2>HouseHolds</h2>
          <Main products={productList2} onAdd={onAdd}></Main>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
      </div>
    </div>
  );
}

export default App;
