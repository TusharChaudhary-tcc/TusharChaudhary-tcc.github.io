function Cart({ cartItems, setCartItems }) {

  // INCREASE QUANTITY
  const increaseQuantity = (title) => {

    setCartItems(
      cartItems.map((item) =>
        item.title === title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };


  // DECREASE QUANTITY
  const decreaseQuantity = (title) => {

    setCartItems(
      cartItems
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };


  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (

    <div className="cart-box">

      <h2>Shopping Cart</h2>


      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        cartItems.map((item, index) => (

          <div className="cart-item" key={index}>

            <h3>{item.title}</h3>

            <p>₹ {item.price}</p>

            <div className="quantity-box">

              <button onClick={() => decreaseQuantity(item.title)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.title)}>
                +
              </button>

            </div>

          </div>

        ))

      )}


      <h2>Total: ₹ {totalPrice}</h2>

    </div>

  );
}

export default Cart;