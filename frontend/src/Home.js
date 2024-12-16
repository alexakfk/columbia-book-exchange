import React from "react";
import avatar from "./images/avatar.png";
import cover1 from "./images/cover1.png";
import HomeSidebar from "./HomeSidebar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Main Section */}
      <div className="sell-book-page">
        <main>
          <div className="page-layout">
            {/* Sidebar */}
            <HomeSidebar />
            {/* Main Content */}
            <Link to="/sell-book" className="sell-button">
              Sell a Book
            </Link>
            <section className="main-content">
              <h1>Currently On Sale</h1>
              <div className="filter-options">
                <select>
                  <option>Recent</option>
                </select>
                <select>
                  <option>Low to High</option>
                </select>
                <select>
                  <option>All</option>
                </select>
              </div>

              {/* Book Grid */}
              <div className="book-grid">
                {[...Array(5)].map((_, index) => (
                  <div className="book-card" key={index}>
                    <div className="book-cover">
                      <img src={cover1} alt="Book Cover" />
                      <div className="seller-avatar">
                        <img src={avatar} alt="Seller Avatar" />
                      </div>
                      <p className="seller-name">John Smith CC '25</p>
                    </div>
                    <div className="book-info">
                      <h3>The Republic</h3>
                      <p className="author">Plato</p>
                      <hr />
                      <div className="status-price-container">
                        <p className="status">Brand New</p>
                        <span className="price">$18.99</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
