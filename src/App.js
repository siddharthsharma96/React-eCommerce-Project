// import logo from "./logo.svg";
import "./App.css";
// import ListItem from "./components/Listitem/ListItems";
import Product from "./components/Product.js";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import { useState } from "react";
function App() {
  const [cartItem, setCartItem] = useState([]);
  const [search, setSearch] = useState("");
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: "",
  });
  const addItemCart = (item) => {
    let items = [...cartItem];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItem([...items]);
    // setCartItem(cartItem + 1);
  };
  const removeItemCart = (item) => {
    let items = [...cartItem];
    let index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItem([...items]);
  };
  const handleQueue = (id, type) => {
    console.log(id, type);
    setEventQueue({
      id,
      type,
    });
  };
  const handleSearch = (text) => {
    setSearch(text);
  };
  return (
    <div>
      <Header
        cartItem={cartItem.length}
        items={cartItem}
        onHandleEvent={handleQueue}
        handleSearch={handleSearch}
      ></Header>
      <SubHeader></SubHeader>
      <Product
        search={search}
        addItemCart={addItemCart}
        removeItemCart={removeItemCart}
        cartEvent={eventQueue}
      ></Product>
    </div>
  );
}

export default App;
