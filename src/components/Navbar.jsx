import React from "react";

function Navbar({ setShowCart, showCart, cartItems }) {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="navbar">

        <div className="logo">
          <img src="/allImages/Flipkart_logo.svg" alt="Flipkart Logo" />
        </div>

        <div className="searchbar">

          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                stroke="#717478"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M16 16L21 21"
                stroke="#717478"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <input
            type="search"
            placeholder="Search for Products, Brands and More"
          />

 

        </div>

        <div className="links">

          <a
            href=""
            className="loginbutton"
          >
            <img src="/allImages/profilel_ogo.svg" alt="" />
            <span>Login</span>
            <img src="/allImages/dropdown.svg" alt="" />
          </a>

          {/* <a href="">
            <img src="/allImages/cart_logo.svg" alt="" />
            <span className="cartAndseller">Cart</span>
          </a> */}

          <div
  onClick={() => setShowCart(!showCart)}
  style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
>
  <img src="/allImages/cart_logo.svg" alt="" />
  <span className="cartAndseller">Cart</span>
</div>

          <span className="becomeSeller">
            <a href="https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect">
              <img src="/allImages/seller_logo.svg" alt="" />
              <span className="cartAndseller">Become a Seller</span>
            </a>
          </span>

          {/* Three Dot Menu */}
          <div className="menu-wraper">

            <a href="/" className="icn-btn">
              <img src="/allImages/dots_logo.svg" alt="" />
            </a>

            <div className="menu-dropdown">

              <div className="dropdownItem">
                <span>
                  <img
                    src="/allImages/notificationPreferencesLogo.svg"
                    alt=""
                  />
                </span>
                Notification Preferences
              </div>

              <div className="dropdownItem">
                <span>
                  <img
                    src="/allImages/helpcenterLogo.svg"
                    alt=""
                  />
                </span>
                24x7 Customer Care
              </div>

              <div className="dropdownItem">
                <span>
                  <img
                    src="/allImages/advertiseLogo.svg"
                    alt=""
                  />
                </span>
                Advertise
              </div>

              <div className="dropdownItem">
                <span>
                  <img
                    src="/allImages/downloadAppLogo.svg"
                    alt=""
                  />
                </span>
                Download App
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Mobile Navbar */}
      <header className="mobile-navbar">

  <div className="mobile-top">

    <i className="menu">☰</i>

    <div className="mobilelogo">
      <img
        src="/allImages/Flipkart_logo.svg"
        alt="Flipkart"
      />
    </div>

    <div className="right-icons">

      <i className="download">⬇</i>

      <i className="login">👤</i>

      {/* MOBILE CART */}
      <div
        onClick={() => setShowCart(!showCart)}
        style={{ cursor: "pointer", position: "relative" }}
      >

        <i className="cart">🛒</i>

        {/* CART COUNT */}
        {cartItems.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "bold"
            }}
          >
            {cartItems.length}
          </span>
        )}

      </div>

    </div>

  </div>

  <div className="mobile-search">
    <input
      type="text"
      placeholder="Search for Products, Brands and More"
    />
  </div>

</header>
    </>
  );
}

export default Navbar;