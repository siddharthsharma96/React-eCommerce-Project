const Form = (props) => {
  const handleEvents = (e) => {
    props.onChangeInput(e);
  };
  const submitForm = (e) => {
    props.onSubmitForm(e);
  };
  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <h2>Item card Details</h2>
        <div className="input-field">
          <label htmlFor="title">title</label>
          <input
            name="title"
            type="text"
            placeholder="enter Value"
            value={props.item.title}
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
            value={props.item.price}
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
            value={props.item.discountedPrice}
            onChange={handleEvents}
            required
          ></input>
        </div>
        <div>
          <button>update</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
