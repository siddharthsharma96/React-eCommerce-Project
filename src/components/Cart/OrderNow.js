import Modal from "../UI/Modal";
import orderSuccess from "./../../asset/order-placed.webp";
const OrderNow = ({ onClosem }) => {
  return (
    <Modal onClosem={onClosem}>
      <div className="order-container">
        <div className="order-container-success">
          <img src={orderSuccess} alt="suc"></img>
          <div className="message">
            <h1>Order Successfully Placed</h1>
            <span>OrderId #{Math.random().toString(32).slice(2)}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default OrderNow;
