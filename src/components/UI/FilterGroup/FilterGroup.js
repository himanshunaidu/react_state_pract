import React, { useState } from "react";

import filters from "../../../data/filters";
import Filter from "./Filter/Filter";

const FilterGroup = (props) => {
  const filter_view = (
    <>
      {Object.keys(filters).map((filter_key) => {
        const filter_obj = filters[filter_key];
        return <Filter key={filter_obj.id} filter_obj={filter_obj} />;
      })}
    </>
  );

  return filter_view;
};

export default FilterGroup;
