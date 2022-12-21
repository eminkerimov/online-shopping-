import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row animationR">
          <img
            src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <button className="animated-border-button">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row animationL">
          <img
            src="https://www.globalblue.com/brands/specials/john-lewis-partners/article933442.ece/BINARY/john_lewis_partners_womenswear_aw19_teaser.jpg"
            alt=""
          />
          <button className="animated-border-button">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row animationR">
          <div className="row">
            <img
              src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
            />
            <button className="animated-border-button">
              <Link className="link" to="/products/1">
                New Season
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row animationL">
              <div className="row">
                <img
                  src="https://t4.ftcdn.net/jpg/02/49/74/73/360_F_249747366_kn4j6KaeMctSSmEtiy5JRuZOV71ixkNY.jpg"
                  alt=""
                />
                <button className="animated-border-button">
                  <Link className="link" to="/products/2">
                    Men
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row animationL">
              <div className="row">
                <img
                  src="https://cdn.dsmcdn.com/ty374/product/media/images/20220328/10/76982078/185505707/2/2_org_zoom.jpg"
                  alt=""
                />
                <button className="animated-border-button">
                  <Link className="link" to="/products/1">
                    Shoes
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row animationR">
          <div className="row">
            <img
              src="http://images.summitmedia-digital.com/preview/images/2019/03/22/nm_photographers-ig.jpg"
              alt=""
            />
            <button className="animated-border-button">
              <Link className="link" to="/products/1">
                Accessories
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
