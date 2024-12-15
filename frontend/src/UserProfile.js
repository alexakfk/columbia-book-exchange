import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SellBookSidebar from "./SellBookSidebar";
import { FaPlus } from "react-icons/fa6";
import BookCard from "./BookCard";

function UserProfile() {
  const bookList = [{
      "image": "./images/cover1.png",
      "altText": "Plato's Republic", 
      "title": "The Republic", 
      "author": "Plato", 
      "isbn": "9781503379985", 
      "sellingPrice": "7.00", 
      "originalPrice": "16.96", 
      "condition": "Lightly Used", 
      "description": "I read this book for the fall semester of my CC class.", 
      "tags": [
        "CC",
        "Core",
        "Humanities",
        "Paperback"
      ]
    }, {
      "image": "./images/cover2.png",
      "altText": "Homer's The Iliad", 
      "title": "The Iliad", 
      "author": "Homer", 
      "isbn": "9780226470498", 
      "sellingPrice": "4.99", 
      "originalPrice": "10.99", 
      "condition": "New (no annotations)", 
      "description": "I read this book for fall semester LitHum.", 
      "tags": [
        "LitHum",
        "Core",
        "Humanities",
        "Paperback"
      ]
    }]

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
          {
            bookList.map((book, idx) => (
              <BookCard image={book.image}
                        altText={book.altText}
                        title={book.title}
                        author={book.author}
                        isbn={book.isbn}
                        sellingPrice={book.sellingPrice}
                        originalPrice={book.originalPrice}
                        condition={book.condition}
                        description={book.description}
                        tags={book.tags}/>
            ))
          }
          {/* <BookCard />
          <br />
          <BookCard />
          <br /> */}
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
