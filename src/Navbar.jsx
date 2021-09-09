import React from "react";
import { Link, Route } from "react-router-dom";
import Container from "./Container";
import Buy from "./Buy";

function Nav() {
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" className="link">
            <h1>
              Shop<span>Online</span>
            </h1>
          </Link>
        </div>
      </header>

      <Route path="/" exact>
        <Container />
      </Route>
      <Route path="/buy" exact>
        <Buy />
      </Route>

      <Route path="/pink" exact>
        <img
          className="preimg"
          src="https://m.media-amazon.com/images/I/81xcPAicKeS._UL1500_.jpg"
          alt="tshirt"
        />
      </Route>
      <Route path="/red" exact>
        <img
          className="preimg"
          src="https://m.media-amazon.com/images/I/81FBjHKhNoS._UL1500_.jpg"
          alt="tshirt"
        />
      </Route>
      <Route path="/blue" exact>
        {" "}
        <img
          className="preimg"
          src="https://m.media-amazon.com/images/I/81QVEO08vrL._UL1500_.jpg"
          alt="tshirt"
        />
      </Route>
      <Route path="/purple" exact>
        {" "}
        <img
          className="preimg"
          src="https://m.media-amazon.com/images/I/81vkbbWWwxS._UL1500_.jpg"
          alt="tshirt"
        />
      </Route>
    </>
  );
}

export default Nav;
