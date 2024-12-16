import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SellBook from "./SellBook";
import BookPurchasing from "./BookPurchasing"; 
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-book" element={<SellBook />} />
        <Route path="/book-purchasing" element={<BookPurchasing />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
