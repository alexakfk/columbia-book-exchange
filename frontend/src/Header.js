import "./App.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={require("./images/logo.png")} alt="logo" />
      </div>

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
