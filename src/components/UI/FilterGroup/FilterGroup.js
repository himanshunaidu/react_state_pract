import React, { useState } from "react";

import filters from "../../../data/filters";
import Filter from "./Filter/Filter";

const FilterGroup = (props) => {
  console.log("Filter Group");

  const filter_view = (
    <>
      {Object.keys(filters).forEach((filter_key) => {
        const filter_obj = filters[filter_key];
        console.log(filter_obj);
        return <Filter filter_obj={filter_obj} />;
      })}
    </>
  );

  return filter_view;
};

export default FilterGroup;
