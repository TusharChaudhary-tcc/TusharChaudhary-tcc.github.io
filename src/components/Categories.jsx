import React from 'react'

function categories() {
  return (
    <div>

<div className="superdiv">

  {/* Categories */}
  <div className="categories">

    <div className="categ-card">
      <img src="/allImages/first.png" alt="" />
      <h4>Minutes</h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/second.webp" alt="" />
      <h4>Mobiles & Tablets</h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/third.png" alt="" />
      <h4>
        Fashion
        <img src="/allImages/dropdown.svg" alt="" />
      </h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/fourth.png" alt="" />
      <h4>
        Electronics
        <img src="/allImages/dropdown.svg" alt="" />
      </h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/fifth.png" alt="" />
      <h4>TVs & Appliances</h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/sixth.png" alt="" />
      <h4>
        Home & Furniture
        <img src="/allImages/dropdown.svg" alt="" />
      </h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/seventh.png" alt="" />
      <h4>Flight Bookings</h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/eight.png" alt="" />
      <h4>
        Beauty, Food
        <img src="/allImages/dropdown.svg" alt="" />
      </h4>
    </div>

    <div className="categ-card">
      <img src="/allImages/nineth.png" alt="" />
      <h4>Grocery</h4>
    </div>

  </div>

  {/* Banner */}
  <section className="sectionban"></section>

  {/* Top Deals */}
  <div className="cont">

    <div
      style={{
        paddingLeft: "1rem",
        paddingTop: "0.25rem",
        fontSize: "20px",
        color: "#1f1f1f"
      }}
    >
      <h4>Top Deals</h4>
    </div>

    <div className="deals">

      <div className="deals-image">
        <img src="/allImages/projector.jpeg" alt="" id="dealsid" />
        <p className="para">Projector</p>
        <h4>From ₹6990</h4>
      </div>

      <div
        className="deals-image"
        style={{ paddingBottom: "5px" }}
      >
        <img src="/allImages/speaker.jpeg" alt="" id="dealsid" />
        <p className="para">Best Selling Mobile Speakers</p>
        <h4>From ₹499*</h4>
      </div>

      <div className="deals-image">
        <img src="/allImages/Monitors1.jpeg" alt="" id="dealsid" />
        <p className="para">Monitors</p>
        <h4>From ₹6599</h4>
      </div>

      <div className="deals-image">
        <img src="/allImages/watch.png" alt="" id="dealsid" />
        <p className="para">Fastrack Smartwatches</p>
        <h4>From ₹1,399</h4>
      </div>

      <div className="deals-image">
        <img src="/allImages/pr.png" alt="" id="dealsid" />
        <p className="para">Printers</p>
        <h4>From ₹2336</h4>
      </div>

      <div className="deals-image">
        <img src="/allImages/Monitors2.jpeg" alt="" id="dealsid" />
        <p className="para">Monitors</p>
        <h4>From ₹7949</h4>
      </div>

      <div className="deals-image">
        <img src="/allImages/Printer2.jpeg" alt="" id="dealsid" />
        <p className="para">Printers</p>
        <h4>From ₹3999</h4>
      </div>

      <div className="deals-image">
        <img src="/allImages/ASUS_Monitors.jpeg" alt="" id="dealsid" />
        <p className="para">ASUS Monitors</p>
        <h4>From ₹14999</h4>
      </div>

    </div>
  </div>

  {/* Blue Section */}
  <div className="blue">

    <div className="blueimg">
      <img src="/allImages/blue1.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue2.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue3.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue4.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue5.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue6.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue7.jpg" alt="" />
    </div>

    <div className="blueimg">
      <img src="/allImages/blue8.jpg" alt="" />
    </div>

    <div className="blueimg bluedelete">
      <img src="/allImages/blue9.jpg" alt="" />
    </div>

  </div>

</div>


    </div>
  )
}

export default categories
