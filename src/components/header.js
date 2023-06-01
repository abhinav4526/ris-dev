import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://en.pimg.jp/069/767/963/1/69767963.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>Customer Support</li>
          <li>Cart</li>
        </ul>
        <div className="login-container">
          <button
            className="login-btn"
            onClick={() => {
              setLoginBtn("Logout");
            }}
          >
            {loginBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
