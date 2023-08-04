import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-none">
      <div className="container-xl ml-2 ">
        <h1 className="font-weight-bold d-flex mr-auto pt-3">
          <Link to="/"  style={{ textDecoration: "none" }} >
            CineHub
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
