import React, { Fragment, useCallback } from "react";

import Checkboxes from "./Checkboxes/Checkboxes";
import Dropdown from "@restart/ui/esm/Dropdown";
import filters from "../../../../data/filters";

const Filter = (props) => {
  const createFilter = useCallback((filter_obj) => {
    switch (filter_obj.input) {
      case 1:
        return <Checkboxes filter_obj={filter_obj} />;
      case 2:
        return <Dropdown filter_obj={filter_obj} />;
      default:
        return null;
    }
  }, []);

  return createFilter(props.filter_obj);
};

export default Filter;
