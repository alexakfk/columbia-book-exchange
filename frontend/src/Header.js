import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <Link className="logo" to="/">
        <img src={require("./images/logo-blue.png")} alt="logo" />
      </Link>

      <div className="nav-right">
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder=" What book are you looking for?" />
        </div>

        <div className="save">
          <i className="fa-solid fa-bookmark"></i>
        </div>

        <div className="profile">
          <span>David Smith</span>
          <img src={require("./images/avatar.png")} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
