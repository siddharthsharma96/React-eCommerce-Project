// import i from "./../../public/assets/images.jpeg";
import AddtoCart from "./../../asset/a1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ data }) => {
  // console.log({ data });
  console.log(data.price);
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
      </div>
      <button className="List-item-button">
        <span>add to cart</span>
        <FontAwesomeIcon className="Listitem-btn-img" icon={faShoppingCart} />
        {/* <img className="Listitem-btn-img" src={AddtoCart} alt="kl"></img> */}
      </button>
    </div>
  );
};
export default ListItem;
