import React from 'react'

function Products({ addToCart }) {
  return (
    <>
      


 <div className="product">

      {/* <!-- Row 1 -->
        <!-- column 1 --> */}

        <div className="product-column">

            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>End of Season Sale</p>
            <div className="status">
                
            <div className="item">
            <div className="img-box">
            <img src="/allImages/watch1.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Wrist Watches</p>
            <p className="price">Min. 90% Off</p>
<button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Wrist Watches",
        price: 999
      })
    }
  >
    Add To Cart
  </button>

            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/fortuner.png"/>
            </div>
            <div className="info">
            <p className="title">Car Toys</p>
            <p className="price">Min. 70% Off</p>
              <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Car Toys",
        price: 499
      })
    }
  >
    Add To Cart
  </button>

            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/jacket1.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Men's Sweatshirts</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Men's Sweatshirts",
        price: 1299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/tracksuit1.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Men's Jacket</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Men's Jackets",
        price: 500
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

        {/* <!-- column 2 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Best Deals on Furniture</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/rack2.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Shoe Rack</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Shoe Rack",
        price: 799
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/wardrobe2.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Collapsible Wardrobes</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Collapsible Wardrobes",
        price: 1199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/temple2.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Home Temple</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Temple",
        price: 5299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/toy2.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Kid Seating</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Kid Seating",
        price: 299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

        {/* <!-- column 3 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Make your home stylish</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/wallClock3.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Wall Clocks</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Wall Clock",
        price: 1299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/mat3.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Mats</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Mats",
        price: 199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/blanket3.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Blankets</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Blankets",
        price: 899
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>


            <div className="item">
            <div className="img-box">
            <img src="/allImages/cooker3.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Pressure Cookers</p>
            <p className="price">Special Offer</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Pressure Cookers",
        price: 899
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

     {/* <!-- Row 2 -->
       <!-- Column 1 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Fashion's Top Deals</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/Sportshoes21.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Men's Sports Shoes</p>
            <p className="price">Min. 70% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Sports Shoes",
        price: 799
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/slipper21.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Men's Slippers & Flip Flops</p>
            <p className="price">Min. 70% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Slipper",
        price: 199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/wristwatches21.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Wrist Watches</p>
            <p className="price">Min. 90% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "SmartWatch",
        price: 699
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/backpacks21.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Backpacks</p>
            <p className="price">Min. 70% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Bagpacks",
        price: 499
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

        {/* <!-- Column 2 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Hair  & Skincare Essentials</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/charcoal.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Charcoal Face Wash</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Face Wash",
        price: 99
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/facewash22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Face Wash</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Men face wash",
        price: 1299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/lipstick22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Lipstick</p>
            <p className="price">Special Offer</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Lipstick",
        price: 129
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/moisturizer22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Moisturizer</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Moisturizer",
        price: 99
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

        {/* <!-- Column 3 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Top picks of the sale</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/capGloves22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Riding Gloves</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Riding Gloves",
        price: 299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/vehiclelight22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Vehicle Light Bulbs</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Vehicle Light",
        price: 199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/diapers22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Baby Diapers</p>
            <p className="price">Min. 30% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Diapers",
        price: 99
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/woofers22.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Car Subwoofers</p>
            <p className="price">Special Offer</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Car Woofers",
        price: 3299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

         {/* <!-- Row 3 -->
       <!-- Column 1 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Christmas Special</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/gloves31.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Helmets And Riding Gears</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Riding Gears",
        price: 199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/lipst31.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Lipstick</p>
            <p className="price">Special offer</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Premium Lispstick",
        price: 499
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/deodorants31.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Deodorants</p>
            <p className="price">Best Picks</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Deodorants",
        price: 199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/learningtoys31.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Learning And Educational Toys</p>
            <p className="price">Explore Now</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Educational Toys",
        price: 199
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

        {/* <!-- Column 2 --> */}
        <div className="product-column">
            <p style={{
  fontSize: "20px",
  fontWeight: "bolder",
  color: "#1f1f1f"
}}>Best Value Deals on Fashion</p>
            <div className="status">

            <div className="item">
            <div className="img-box">
            <img src="/allImages/flipflop32.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Men's Slippers & Flip Flops</p>
            <p className="price">Min. 70% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Men's Flip FLops",
        price: 299
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/trimmer32.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Trimmers</p>
            <p className="price">Min. 50% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Trimmer",
        price: 799
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/handwatches32.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Wrist Watches</p>
            <p className="price">Min. 90% Off</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Watch",
        price: 699
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>

            <div className="item">
            <div className="img-box">
            <img src="/allImages/neckband32.jpeg"/>
            </div>
            <div className="info">
            <p className="title">Neckband</p>
            <p className="price">Top Picks</p>
            <button
    className="cart-btn"
    onClick={() =>
      addToCart({
        title: "Neckbands",
        price: 599
      })
    }
  >
    Add To Cart
  </button>
            </div>
            </div>
        </div>
        </div>

        {/* <!-- Column 3 --> */}

        <div className="boxer">
            <div className="boxertext">
                <h3>Find furnitures<br/>that speak to you</h3>
                <p>Discover our Premium Furniture Collection!</p>
            </div>
            <div className="boxerimg">
                <img src="/allImages/1flyingchair33.png" />
                <img src="/allImages/2recliners33.jpeg" />
                <img src="/allImages/3sofa33.webp"  />
            </div>
            <button>See Collection </button>
        </div>

        </div>


    </>
  );
}

export default Products
