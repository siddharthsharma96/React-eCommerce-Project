import { useState } from "react";
import ListItem from "./Listitem/ListItems.js";
import Form from "./Layout/Form.js";
const Product = () => {
  const [ckey, setCkey] = useState(0);
  // const [title, setTitle] = useState("");
  // const [discountedPrice, setDiscountedPrice] = useState(0);
  // const [price, setPrice] = useState(0);
  const [item, setItem] = useState([
    {
      id: { ckey },
      title: "Title of this item 1",
      discountedPrice: 300,
      price: 500,
    },
    {
      id: 1,
      title: "Title of this item 2",
      discountedPrice: 600,
      price: 1000,
    },
    {
      id: 2,
      title: "Title of this item 3",
      discountedPrice: 350,
      price: 500,
    },
  ]);
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
  // const submitForm = (e) => {
  //   e.preventDefault();

  //   if (item.discountedPrice > item.price) {
  //     alert("higher value");
  //     return;
  //   }
  //   console.log("item Updated", item);
  //   // setItem({
  //   //   title,
  //   //   discountedPrice,
  //   //   price,
  //   // });
  // };
  // const handleEvents = (e) => {
  //   console.log(e.target.name, e.target.value);
  //   setItem({
  //     ...item,
  //     [e.target.name]: [e.target.value],
  //   });
  // };
  return (
    <div className="List-container">
      {/* <Form
        item={item}
        onChangeInput={handleEvents}
        onSubmitForm={submitForm}
      ></Form> */}
      {/* <ListItem data={item}></ListItem> */}
      {/* <ListItem data={items[1]}></ListItem>
      <ListItem data={items[2]}></ListItem> */}
      {item.map((i) => {
        return <ListItem key={i.id} data={i}></ListItem>;
      })}
    </div>
  );
};
export default Product;
