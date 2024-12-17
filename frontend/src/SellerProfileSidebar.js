// FINAL VERSION OF USER PROFILE SIDEBAR

import { MdOutlineEdit } from "react-icons/md";

function SellBookSidebar() {
  return (
    <div className="sidebar">
      <div className="user-profile">
        <h2>
          User Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <MdOutlineEdit />
        </h2>
        <p>
          <strong>Name:</strong> David Smith&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src={require("./images/avatar.png")}
            alt="Profile"
            className="inline-image"
          />
        </p>
        <p>
          <strong>Contact me at:</strong> ds123@columbia.edu
        </p>
        <p>
          <strong>About me:</strong>
          <br />
          I’m a sophomore in CC with many leftover books from LitHum!
        </p>
      </div>
      <div className="how-it-works">
        <h2>How it Works</h2>
        <p>
          Welcome to the <strong>Columbia Book Exchange</strong>, where you can
          buy or sell books at affordable prices for your peers. Browse through
          our selection with the help of filter and tags to get what you need
          for specific classes, like LitHum or CC. When you find your book,
          click on the listing to get more information on the seller so you can
          coordinate the exchange. To sell your own book, click on the Sell a
          Book button and it will be available for viewing!
        </p>
      </div>
    </div>
  );
}

export default SellBookSidebar;
