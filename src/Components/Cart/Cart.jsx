import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <>
      <h3>Cart : {cart.length} </h3>
      <div className="cartContainer">
        {cart.map((bottle) => (
          <img key={bottle.id} src={bottle.img} alt="" />
        ))}
      </div>
    </>
  );
};

export default Cart;
