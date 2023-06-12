// import logo from "./logo.svg";
import "./App.css";
// import ListItem from "./components/Listitem/ListItems";
import Product from "./components/Product.js";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
function App() {
  return (
    <div>
      <Header></Header>
      <SubHeader></SubHeader>
      <Product></Product>
    </div>
  );
}

export default App;
