import React, { Fragment, useCallback } from "react";

import Checkboxes from "./Checkboxes/Checkboxes";
import Dropdown from "@restart/ui/esm/Dropdown";

const Filter = (props) => {
  const createFilter = useCallback((filter_obj) => {
    console.log(filter_obj.input);
    switch (filter_obj.input) {
      case 1:
        return <Checkboxes filter_obj={filter_obj} />;
      case 2:
        return <Dropdown filter_obj={filter_obj} />;
      default:
        return <div></div>;
    }
  }, []);

  return createFilter(props.filter_obj);
};

export default Filter;
