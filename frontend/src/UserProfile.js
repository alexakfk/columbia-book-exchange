import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellBookSidebar from "./SellBookSidebar";
import { FaPlus } from "react-icons/fa6";
import BookCard from "./BookCard";

function UserProfile() {
  return (
    <div className="seller-profile-page">
      <div className="page-layout">
        <SellBookSidebar />
        <div className="content-area">
          <nav aria-label="breadcrumb">
            <ol className="crumb-list">
              <li>
                <Link to="/" className="crumb">
                  Home
                </Link>
              </li>
              <li className="crumb-separator">&gt;</li>
              <li className="current-crumb">Seller Profile</li>
            </ol>
          </nav>
          <div className="title-container">
            <h2 className="page-title">Sell a Book</h2>
            <div className="react-icon"><FaPlus size={21}/></div>
          </div>
          <BookCard />
          <br />
          <BookCard />
          <br />
          <div className="form-actions">
            <button type="submit" className="sell-book-button">
              Add a Book to Sell
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
