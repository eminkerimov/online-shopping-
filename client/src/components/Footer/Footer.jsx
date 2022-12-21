import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="item wSmall">
          <h1>Categories</h1>
          <Link className="link" to="/product/1">
            Women
          </Link>
          <Link className="link" to="/product/2">
            Men
          </Link>
          <Link className="link" to="/product/3">
            Children
          </Link>
          <Link className="link" to="/product/3">
            Accessories
          </Link>
          <Link className="link" to="/product/3">
            New Arrivals
          </Link>
        </div>
        <div className="item wSmall">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item wLarge">
          <h1>About</h1>
          <span className="about">
            Since 2022, our mission is to have a positive impact by offering a
            seamless e-commerce experience to customers and sellers.The trust of
            over 50 million customers and 500,000 sellers propelled us to become
            the first decacorn in USA.
          </span>
        </div>
        <div className="item wLarge">
          <h1>Contact</h1>
            <div className="item info">
              <span>
              Address:
              </span>
              <a href="https://www.google.com/maps/place/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F+%D0%94%D0%B0%D0%BA%D0%BE%D1%82%D0%B0,+%D0%A1%D0%A8%D0%90/@47.0958449,-109.5299498,6z/data=!3m1!4b1!4m5!3m4!1s0x52d7831257d8e963:0xd849a39835ecfc9!8m2!3d47.3983492!4d-100.3051758">
              Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.
              </a>
              </div>
              <div className="item info">
                <span>Phone:</span>
                <a href="tel:32645645645">3264-564-56-45</a>
              </div>
              <div className="item info">
                <span>Mobile:</span>
                <a href="tel:66632568122">6663-256-81-22</a>
              </div>
              <div className="item info">
                <span>E-mail:</span>
                <a href="mailto:info@minget.az">info@mstore666.com</a>
              </div>
       </div>
      </div>
      <div className="footer__bottom">
        <div className="left">
        <Link to="/" className="link logo">M-store</Link>
          <span className="copyright">
            © Copyright 2022. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
