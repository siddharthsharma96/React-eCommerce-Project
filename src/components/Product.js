import { useState } from "react";
import ListItem from "./Listitem/ListItems.js";
const Product = () => {
  // const [title, setTitle] = useState("");
  // const [discountedPrice, setDiscountedPrice] = useState(0);
  // const [price, setPrice] = useState(0);
  const [item, setItem] = useState({
    id: 0,
    title: "Title of this item 1",
    discountedPrice: 300,
    price: 500,
  });
  // const handletitle = (event) => {
  //   // setTitle(event.target.value);
  //   setItem({
  //     ...item,
  //     title: event.target.value,
  //   });
  // };
  // const handleprice = (event) => {
  //   // setPrice(event.target.value);
  //   setItem({
  //     ...item,
  //     price: event.target.value,
  //   });
  // };
  // const handlediscPrice = (event) => {
  //   // setDiscountedPrice(event.target.value);
  //   setItem({
  //     ...item,
  //     discountedPrice: event.target.value,
  //   });
  // };
  // // let items = [
  //   {
  //     id: 0,
  //     title: "Title of this item 1",
  //     discountedPrice: 300,
  //     price: 500,
  //   },
  //   {
  //     id: 1,
  //     title: "Title of this item 2",
  //     discountedPrice: 600,
  //     price: 1000,
  //   },
  //   {
  //     id: 2,
  //     title: "Title of this item 3",
  //     discountedPrice: 350,
  //     price: 500,
  //   },
  // ];
  const submitForm = (e) => {
    e.preventDefault();

    if (item.discountedPrice > item.price) {
      alert("higher value");
      return;
    }
    // setItem({
    //   title,
    //   discountedPrice,
    //   price,
    // });
  };
  const handleEvents = (e) => {
    console.log(e.target.name, e.target.value);
    setItem({
      ...item,
      [e.target.name]: [e.target.value],
    });
  };
  return (
    <div className="List-container">
      <div className="form">
        <form onSubmit={submitForm}>
          <h2>Item card Details</h2>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input
              name="title"
              type="text"
              placeholder="enter Value"
              value={item.title}
              onChange={handleEvents}
              required
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="price">Price</label>
            <input
              name="price"
              type="number"
              placeholder="enter Value"
              value={item.price}
              onChange={handleEvents}
              required
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="discountedPrice">Discounted price</label>
            <input
              name="discountedPrice"
              type="number"
              placeholder="enter discPricelue"
              value={item.discountedPrice}
              onChange={handleEvents}
              required
            ></input>
          </div>
          <div>
            <button>update</button>
          </div>
        </form>
      </div>
      <ListItem data={item}></ListItem>
      {/* <ListItem data={items[1]}></ListItem>
      <ListItem data={items[2]}></ListItem> */}
    </div>
  );
};
export default Product;
