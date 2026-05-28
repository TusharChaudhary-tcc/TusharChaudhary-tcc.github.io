import { useState, useEffect } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  

  // useEffect(() => {
  //   document.body.classList.remove("dark", "light");
  //   document.body.classList.add(darkMode ? "dark" : "light");
  // }, [darkMode]);


  useEffect(() => {

  if (window.innerWidth <= 769) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    return;
  }

  document.body.classList.remove("dark", "light");

  document.body.classList.add(
    darkMode ? "dark" : "light"
  );

}, [darkMode]);



  // ADD TO CART FUNCTION
  // const addToCart = (product) => {

  //   const existingItem = cartItems.find(
  //     (item) => item.title === product.title
  //   );

  //   if (existingItem) {

  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.title === product.title
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );

  //   } else {

  //     setCartItems([
  //       ...cartItems,
  //       { ...product, quantity: 1 }
  //     ]);

  //   }
  // };


  const addToCart = (product) => {

  const existingItem = cartItems.find(
    (item) => item.title === product.title
  );

  if (existingItem) {

    setCartItems(
      cartItems.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  } else {

    setCartItems([
      ...cartItems,
      { ...product, quantity: 1 }
    ]);

  }

  // TOAST POPUP
  toast.success(`${product.title} added to cart 🛒`);
};



  return (
    <>

      {/* THEME BUTTON */}
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>



      {/* NAVBAR */}
      <Navbar
        setShowCart={setShowCart}
        showCart={showCart}
        cartItems={cartItems}
      />
      
      <ToastContainer
  position="top-right"
  autoClose={2000}
/>



      {/* CART */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}



      {/* MAIN CONTENT */}
      <Categories />

      <Products addToCart={addToCart} />

      <Deals />

      <Footer />

    </>
  );
}

export default App;