import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SellBook from "./SellBook";
import UserProfile from "./UserProfile";
import BookListing from "./BookListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-book" element={<SellBook />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/book-listing" element={<BookListing />} />
      </Routes>
    </Router>
  );
}

export default App;
