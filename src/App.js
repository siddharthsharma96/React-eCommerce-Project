import logo from "./logo.svg";
import "./App.css";
// import ListItem from "./components/Listitem/ListItems";
import Product from "./components/Product.js";
import Header from "./components/Layout/Header";
function App() {
  return (
    <div>
      <Header></Header>
      <Product></Product>
    </div>
  );
}

export default App;
