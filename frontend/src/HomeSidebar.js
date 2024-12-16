function HomeSidebar() {
  return (
    <div className="sidebar">
      <aside>
        <div className="user-profile">
          <h2 className="tag">Status</h2>
          <hr />
          <h2 className="tag">Price</h2>
          <hr />
          <h2 className="tag">School</h2>
          <hr />
          <ul>
            <li>
              <button>+</button> LitHum
            </li>
            <li>
              <button>+</button> First Year Writing
            </li>
            <li>
              <button>+</button> First Year Seminar
            </li>
          </ul>
          <hr />
          <h2 className="tag">Sale</h2>
          <hr />
        </div>
        <div className="how-it-works">
          <h2>How it Works</h2>
          <p>
            Welcome to the <strong>Columbia Book Exchange</strong>, where you
            can buy or sell books at affordable prices for your peers. Browse
            through our selection with the help of filter and tags to get what
            you need for specific classes, like LitHum or CC. When you find your
            book, click on the listing to get more information on the seller so
            you can coordinate the exchange. To sell your own book, click on the
            Sell a Book button and it will be available for viewing!
          </p>
        </div>
      </aside>
    </div>
  );
}

export default HomeSidebar;
