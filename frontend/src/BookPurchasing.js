import React from 'react';
import './styles/book-purchasing.css'; // Import the CSS file

const BookPurchasing = () => {
  return (
    <div className="book-purchasing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">COLUMBIA BOOK EXCHANGE</div>
        <input
          type="text"
          placeholder="What book are you looking for?"
          className="search-bar"
        />
        <div className="profile">
          <span>David Smith</span>
        </div>
        <button className="sell-btn">Sell A Book</button>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Our Goal</h2>
        <p>
          This website promotes accessibility and sustainability by helping students
          exchange books, reducing costs and waste while supporting an equitable
          campus community.
        </p>
        <ul>
          <li>Status</li>
          <li>Price</li>
          <li>School</li>
          <li>Tags</li>
          <ul>
            <li>LitHum</li>
            <li>First Year Writing</li>
            <li>First Year Seminar</li>
          </ul>
          <li>Sale</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <nav className="breadcrumb">Home &gt; Book Purchasing</nav>
        <div className="book-details">
          <img
            src="https://via.placeholder.com/200"
            alt="The Iliad Book Cover"
            className="book-img"
          />
          <div className="book-info">
            <h1>The Iliad by Homer</h1>
            <p>Hardcover</p>
            <div className="price">
              <span>$4.00</span> <span>$17.99</span>
            </div>
            <button className="contact-btn">Contact Seller</button>
            <p className="description">
              I used this book early into my fall semester of Lit Hum.
            </p>
          </div>
        </div>
        <div className="book-overview">
          <h2>Book Overview:</h2>
          <p>
            The Iliad by Homer is an epic poem set during the Trojan War, exploring themes
            of honor, wrath, and fate. It follows the Greek hero Achilles, who withdraws
            from battle after a dispute with King Agamemnon, shifting the war’s tide.
            After the death of his friend Patroclus, Achilles returns to confront the
            Trojan hero Hector in a dramatic duel. A timeless tale, The Iliad captures
            the heroism and tragedy of human conflict.
          </p>
        </div>
        <div className="pagination">
          Results 1 - 20 out of 90 <br />
          <span>Page 1 2 3 4 &gt;</span>
        </div>
      </main>
    </div>
  );
};

export default BookPurchasing;
