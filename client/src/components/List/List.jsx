import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../custom/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {

  const categoryFilter = subCats?.map(item => `&[filters][sub_categories][id][$eq]=${item}`).join("");

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${categoryFilter}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
