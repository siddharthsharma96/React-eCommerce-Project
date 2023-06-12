import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ListItem = ({ data }) => {
  // console.log({ data });
  // console.log(data.price);
  const [message, setMessage] = useState("You haven't added this item in cart");
  const clicked = () => {
    console.log("msg ", data);
    console.log(message);
    setMessage("cart added");
    console.log(message);
  };
  return (
    <div className="ListItem-Conatiner">
      <img
        className="listem-Image"
        src="/assets/download.jpeg"
        alt="listitem"
      ></img>
      <div>
        <div className="Listiem-Price">
          <span>${data.discountedPrice}</span>
          <strike>${data.price}</strike>
        </div>
        <div className="list-title">
          <h3>{data.title}</h3>
        </div>
        <p className="cartMsg">{message}</p>
      </div>
      <button className="List-item-button" onClick={clicked}>
        <span>add to cart</span>
        <FontAwesomeIcon className="Listitem-btn-img" icon={faShoppingCart} />
        {/* <img className="Listitem-btn-img" src={AddtoCart} alt="kl"></img> */}
      </button>
    </div>
  );
};
export default ListItem;
