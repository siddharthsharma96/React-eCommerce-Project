const Cartitem = ({ data, onEmitDecreaseItem, onEmitIncreaseItem }) => {
  console.log(data.thumbnail);
  return (
    <div className="checkout-modal-list-item">
      <div className="img-wrap">
        <img src={`/assets/${data.thumbnail}`} alt={data.title}></img>
      </div>
      <div className="information">
        <div>
          <h4>{data.title}</h4>
          <div className="pricing">
            <span>{data.discountedPrice}</span>
            <small>
              <strike>{data.price}</strike>
            </small>
          </div>
        </div>
        <div className="cart-addon cart-addon-modal">
          <button onClick={() => onEmitDecreaseItem(data.id)}>-</button>
          <span className="countitem">{data.quantity}</span>
          <button onClick={() => onEmitIncreaseItem(data.id)}>+</button>
        </div>
      </div>
    </div>
  );
};
export default Cartitem;
