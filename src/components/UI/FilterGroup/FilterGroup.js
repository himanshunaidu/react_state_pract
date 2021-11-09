import React, { Fragment, useState } from "react";

import filters from "../../../data/filters";
import Filter from "./Filter/Filter";

const FilterGroup = (props) => {
  const filter_view = (
    <>
      {Object.keys(filters).forEach((filter_key) => {
        const filter_obj = filters.versions; //filters[filter_key]
        return <Filter filter_obj={filter_obj} />;
      })}
    </>
  );

  return filter_view;
};

export default FilterGroup;
