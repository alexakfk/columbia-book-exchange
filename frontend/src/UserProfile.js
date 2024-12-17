import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SellerProfileSidebar from "./SellerProfileSidebar";
import { FaPlus } from "react-icons/fa6";
import BookCard from "./BookCard";

function UserProfile() {
  const [bookList, setBookList] = useState([]);

  const makeAPICall = async () => {
    console.log("makeAPICall try statement entered")
    fetch('/api/get_book_listings')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json()
      })
      .then(data => {
        console.log("sup")
        console.log(data)
        console.log("bye")
      })
      .catch(error => {
        console.error('Error fetching book listings:', error);
      })

    // try {
    //   console.log("makeAPICall try statement entered")
    //   const response = await fetch('/api/get_book_listings');

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }

    //   console.log({ response })
    //   console.log("printed response")
    //   console.log(response.json())
    //   const data = await response.json();
    //   setBookList(data)
    //   console.log({ data })
    // }
    // catch(error) {
    //   console.error('Error fetching book listings:', error);
    // }
  }

  useEffect(() => {
    console.log("entering use effect");
    makeAPICall();
  }, []);

  return (
    <div className="seller-profile-page">
      <div className="page-layout">
        <SellerProfileSidebar />
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
