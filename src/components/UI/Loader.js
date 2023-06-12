import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="loader"></div>,
    document.getElementById("loader-root")
  );
};

export default Loader;
