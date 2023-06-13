import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import Cartitem from "./CartItem";
import OrderNow from "./OrderNow";
const Cart = ({ cartItem, items, onHandleEvent }) => {
  const [showmodal, setShowmodal] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleModal = () => {
    setShowmodal((previousState) => !previousState);
  };
  const handleOrdermodal = () => {
    setShowmodal(false);
    setSuccess((previousState) => !previousState);
  };
  return (
    <Fragment>
      <button onClick={handleModal} className="cart">
        {/* Cart icon and value */}
        {/* <span className="cart-icon">&#128722;</span> */}
        <div>
          <p>Cart </p>
        </div>
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
        <span className="cart-value">{cartItem}</span>
      </button>
      {showmodal && (
        <Modal onClosem={handleModal}>
          <div className="checkout-modal">
            <h2>Checkout Modal</h2>
            <div className="checkout-modal-list">
              {cartItem > 0 ? (
                items.map((item) => {
                  return (
                    <Cartitem
                      data={item}
                      key={item.id}
                      onEmitDecreaseItem={(id) => onHandleEvent(id, -1)}
                      onEmitIncreaseItem={(id) => onHandleEvent(id, 1)}
                    ></Cartitem>
                  );
                })
              ) : (
                <div className="empty-cart">
                  Please Add something in your Cart
                </div>
              )}
            </div>
          </div>
          {cartItem > 0 && (
            <div className="checkout-modal-footer">
              <div className="totalAmount">
                <h4>Total Amount :</h4>
                <h4>
                  {items.reduce((previous, current) => {
                    return (
                      previous + current.discountedPrice * current.quantity
                    );
                  }, 0)}{" "}
                  INR
                </h4>
              </div>
              <button onClick={handleOrdermodal} className="order-now">
                <span>Order Now</span>
              </button>
              {}
            </div>
          )}
        </Modal>
      )}
      {success && <OrderNow onClosem={handleOrdermodal}></OrderNow>}
    </Fragment>
  );
};
export default Cart;
