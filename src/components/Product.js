import { useState, useEffect } from "react";
import ListItem from "./Listitem/ListItems.js";
import axios from "axios";
import Loader from "./UI/Loader.js";
// import Form from "./Layout/Form.js";
const Product = ({ addItemCart, removeItemCart, cartEvent, search }) => {
  const [loader, setLoader] = useState(true);
  const [d, setD] = useState([]);
  // const [presentItemCart, setPresentItemCart] = useState([]);
  // const [title, setTitle] = useState("");
  // const [discountedPrice, setDiscountedPrice] = useState(0);
  // const [price, setPrice] = useState(0);
  const [item, setItem] = useState([]);
  // we are using this useefect for our data that is fetching from db
  useEffect(() => {
    // Way 1 using fetch api
    // fetch(
    //   `https://react-ecommerce-61434-default-rtdb.firebaseio.com/items.json`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // way2 using axios for this we write mpn install axios in terminal then import it
    // axios
    //   .get(
    //     `https://react-ecommerce-61434-default-rtdb.firebaseio.com/items/items.json`
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     const data = response.data;
    //     const transformData = data.map((item, index) => {
    //       return {
    //         ...item,
    //         id: index,
    //       };
    //     });
    //     setItem(transformData);
    //     console.log(transformData);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // way2.1 in this we are calling our api using async and await
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://react-ecommerce-61434-default-rtdb.firebaseio.com/items/items.json"
        );
        // console.log(response);
        const data = response.data;
        const transformData = data.map((item, index) => {
          return {
            ...item,
            quantity: 0,
            id: index,
          };
        });
        setD(transformData);
        setItem(transformData);
        // console.log(transformData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (cartEvent.id > -1) {
      if (cartEvent.type === 1) {
        handleAdditemCart(cartEvent.id);
      } else if (cartEvent.type === -1) {
        handleRemoveitemCart(cartEvent.id);
      }
    }
  }, [cartEvent]);
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
  const updateTitle = async (itemId) => {
    // console.log(itemId);
    try {
      let title = `update title-${itemId}`;
      await axios.patch(
        `https://react-ecommerce-61434-default-rtdb.firebaseio.com/items/items/${itemId}.json`,
        { title: title }
      );
      let data = [...item];
      let index = data.findIndex((e) => e.id === itemId);
      data[index]["title"] = title;
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdditemCart = (id) => {
    // console.log(id);
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    data[index].quantity += 1;
    setItem([...data]);
    addItemCart(data[index]);
    //when we are not using db
    // if (presentItemCart.indexOf(id) > -1) {
    //   return;
    // }
    // setPresentItemCart([...presentItemCart, id]);
    // addItemCart();
  };
  const handleRemoveitemCart = (id) => {
    // console.log(id);
    let data = [...item];
    let index = data.findIndex((i) => i.id === id);
    if (data[index].quantity !== 0) {
      data[index].quantity -= 1;
      setItem([...data]);
      removeItemCart(data[index]);
    }
    //when we are not using db
    // let index = presentItemCart.indexOf(id);
    // if (index > -1) {
    //   let items = [...presentItemCart];
    //   items.splice(index, 1);
    //   setPresentItemCart([...items]);
    //   removeItemCart();
    // }
  };
  let filteredArray = [];
  if (search !== "") {
    filteredArray = item.filter((e) => {
      let afgh = e.title.toLowerCase().includes(search.toLowerCase());
      return afgh;
    });
  } else {
    filteredArray = d;
  }

  useEffect(() => {
    if (search.trim() === "") {
      // Handle the case when the search value is empty
      // For example, you can reset the filtered array to the original item array
      filteredArray = d;
    }
    setItem(filteredArray);
  }, [search]);

  return (
    <>
      <div className="List-container">
        {/* <ListItem data={item}></ListItem> */}
        {/* <ListItem data={items[1]}></ListItem>
      <ListItem data={items[2]}></ListItem> */}
        {item.map((i) => {
          return (
            // <ListItem key={i.id} data={i} updateTitle={updateTitle}></ListItem>
            <ListItem
              onAdd={handleAdditemCart}
              onRemove={handleRemoveitemCart}
              loader={loader}
              key={i.id}
              data={i}
            ></ListItem>
          );
        })}
      </div>
      {loader && <Loader />}
    </>
  );
};
export default Product;
