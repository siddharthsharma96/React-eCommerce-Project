import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
const ListItem = ({ data, loader, onAdd, onRemove }) => {
  // console.log({ data });
  // console.log(data.price);
  //when we are not using db
  // const [counter, setCounter] = useState(0);
  const [showmodal, setShowmodal] = useState(false);
  // const [message, setMessage] = useState("You haven't added this item in cart");
  const increaseCounter = (e) => {
    e.stopPropagation();
    onAdd(data.id);
    //when we are not using db
    // setCounter(counter + 1);
  };
  const decreaseCounter = (e) => {
    e.stopPropagation();
    onRemove(data.id);
    //when we are not using db
    // if (data.quantity === 0) {
    //   return;
    // }
    // if (data.quantity == 1) {
    //   onRemove(data.id);
    // }
    // setCounter(counter - 1);
  };
  // const clicked = () => {
  //   console.log("msg ", data);
  //   console.log(message);
  //   setMessage("cart added");
  //   console.log(message);
  // };
  const handleModal = () => {
    setShowmodal((previousState) => !previousState);
  };
  return (
    <Fragment>
      <div
        onClick={handleModal}
        className={loader ? "ListItem-Conatiner-blur" : "ListItem-Conatiner"}
      >
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
          {/* <p className="cartMsg">{message}</p> */}
        </div>
        {/* <button onClick={() => updateTitle(data.id)}>update title</button> */}
        {data.quantity < 1 ? (
          <button className="List-item-button" onClick={increaseCounter}>
            <span>add to cart</span>
            <FontAwesomeIcon
              className="Listitem-btn-img"
              icon={faShoppingCart}
            />
            {/* {/* <img className="Listitem-btn-img" src={AddtoCart} alt="kl"></img> * */}
          </button>
        ) : (
          <div className={"add-items"}>
            <button onClick={decreaseCounter}>-</button>
            <p>{data.quantity}</p>
            <button onClick={increaseCounter}>+</button>
          </div>
        )}
      </div>
      {showmodal && (
        <Modal onClosem={handleModal}>
          <div className="item-card_modal">
            <div className="img-wrap">
              <img
                className="listem-Image"
                src="/assets/download.jpeg"
                alt="listitem"
              ></img>
            </div>
            <div className="Meta">
              <h3>{data.title}</h3>
              <div className="pricing">
                <span>{data.discountedPrice}</span>
                <small>
                  <strike>{data.price}</strike>
                </small>
              </div>
              <p>{data.description}</p>
              {data.quantity < 1 ? (
                <button className="List-item-button" onClick={increaseCounter}>
                  <span>add to cart</span>
                  <FontAwesomeIcon
                    className="Listitem-btn-img"
                    icon={faShoppingCart}
                  />
                  {/* {/* <img className="Listitem-btn-img" src={AddtoCart} alt="kl"></img> * */}
                </button>
              ) : (
                <div className={"add-items"}>
                  <button onClick={decreaseCounter}>-</button>
                  <p>{data.quantity}</p>
                  <button onClick={increaseCounter}>+</button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default ListItem;
