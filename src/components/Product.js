import ListItem from "./Listitem/ListItems.js";
const Product = () => {
  let items = [
    {
      id: 0,
      title: "Title of this item 1",
      discountedPrice: 300,
      price: 500,
    },
    {
      id: 2,
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
  ];
  return (
    <div className="List-container">
      <ListItem data={items[0]}></ListItem>
      <ListItem data={items[1]}></ListItem>
      <ListItem data={items[2]}></ListItem>
    </div>
  );
};
export default Product;
