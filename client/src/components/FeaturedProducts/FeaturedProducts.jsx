import React from "react";
import useFetch from "../../custom/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Suits for spring/summer 2023 came in structured shapes and fitted silhouettes, bringing high quality tailoring to the forefront of design. While some cuts and fits were fine tuned to models, others were heavily structured into oversized designs. 
        </p>
      </div>
      <div className="bottom">
        {error ? "Something get wrong ..." 
        :  loading 
        ? "loading"
        : data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
