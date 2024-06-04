import { useContext } from "react";
import logo1 from "../media/amazon3-removebg-preview-removebg-preview.png";
import { Link } from "react-router-dom";
import { userData } from "../App";
function Nav() {
  let {data} = useContext(userData)
  return (
    <div id="nav" className="nav">
      <div className="up">
        <img src={`${logo1}`} alt="" className="logo" />
        <div className="loc">
          <p>Deliver to</p>
          <div className="loc-to">
            <span className="country">Egypt</span>
          </div>
        </div>
        <div className="search">
          <button className="search-drop">
            All<i class="fa-solid fa-sort-down"></i>
          </button>
          <input type="text" name="" id="" placeholder="Serach Amazon" />
          <button className="search-s">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <span id="lang">
          EN <i class="fa-solid fa-sort-down"></i>
        </span>
        <div
          onMouseEnter={() => {
            document.querySelector(".sp1.login").classList.add("active");
            document.querySelector(".home")&&document.querySelector(".home").classList.add("active");
          }}
          onMouseLeave={() => {
            document.querySelector(".sp1.login").classList.remove("active");
            document.querySelector(".home")&&document.querySelector(".home").classList.remove("active");
          }}
          className="sp1 login"
        >
          <span>Hello, {data?data.firstname:"sign in"}</span>
          <p>
            Accounts & Lists<i class="fa-solid fa-sort-down"></i>
          </p>
          <div className="login-menu">
            <div className="con">
              <div className="top">
                <Link to="/signin">
                  <button>Sign in</button>
                </Link>
                <p>
                  New customer? <span>Start here</span>.
                </p>
              </div>
              <div className="bot">
                <div className="box">
                  <h5>Your Lists</h5>
                  <p>Create a List</p>
                  <p>Find a List or Registery</p>
                </div>
                <div className="box">
                  <h5>Your Account</h5>
                  <p>Account</p>
                  <p>Orders</p>
                  <p>Recommendations</p>
                  <p>Browsing History</p>
                  <p>Watchlist</p>
                  <p>Video Purchaces & Rentals</p>
                  <p>Kindle Unlimited</p>
                  <p>Content & Devices</p>
                  <p>Subscribe & Save Items</p>
                  <p>Memberships & Subscriptions</p>
                  <p>Music Library</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sp1 return-orders">
          <span>Returns</span>
          <p>& Orders</p>
        </div>
        <div className="cart">
          <span>
            <span id="cart-in">{data?data.products:0}</span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span>Cart</span>
        </div>
      </div>
      <div className="bot">
        <div className="box">
          <span>
            <i class="fa-solid fa-bars"></i> All
          </span>
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>Registery</span>
          <span>Gift Cards</span>
          <span>Sell</span>
        </div>
        <span>Shop deals in Electronics</span>
      </div>
    </div>
  );
}

export default Nav;
