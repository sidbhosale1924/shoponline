import React from "react";
import Productdata from "./Productdata";
import Buy from "./Buy";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function Container() {
  return (
    <>
      <section className="container">
        <div className="left-img">
          <img
            src="https://m.media-amazon.com/images/I/81D76vnOAsS._AC_UL480_FMwebp_QL65_.jpg"
            alt="tshirt"
          />
        </div>
        <div className="data-info">
          <h1 className="title">{Productdata.title}</h1>
          <p className="description">{Productdata.description}</p>
          <h2 className="colorhead">Select Color</h2>
          <div className="colorimg">
            <img
              src="https://m.media-amazon.com/images/I/81D76vnOAsS._UL1500_.jpg"
              alt="black"
            />

            <Link to="/pink">
              <img
                src="https://m.media-amazon.com/images/I/81xcPAicKeS._UL1500_.jpg"
                alt="pink"
              />
            </Link>
            <Link to="/red">
              <img
                src="https://m.media-amazon.com/images/I/81FBjHKhNoS._UL1500_.jpg"
                alt="red"
              />
            </Link>
            <Link to="/blue">
              <img
                src="https://m.media-amazon.com/images/I/81QVEO08vrL._UL1500_.jpg"
                alt="blue"
              />
            </Link>
            <Link to="/purple">
              <img
                src="https://m.media-amazon.com/images/I/81vkbbWWwxS._UL1500_.jpg"
                alt="purple"
              />
            </Link>
          </div>
          <h2 className="colorhead">Features</h2>
          <div className="features">
            <ul>
              <li>
                Care Instructions: Wash with mild detergent, do not bleach, dry
                in shade
              </li>
              <li>Fit Type: regular fit</li>
              <li>60% cotton and 40% polyester</li>
              <li>Regular fit</li>
              <li>Banded collar</li>
              <li>Half sleeve</li>
              <li>Wash with mild detergent, do not bleach, dry in shade</li>
            </ul>
          </div>
          <Link
            to="/buy"
            className="addbtn
          "
          >
            Add To Cart
          </Link>
          <div className="price">
            <h2>$120</h2>
            <h3>$150</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Container;
