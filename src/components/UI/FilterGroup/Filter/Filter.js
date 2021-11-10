import React, { Fragment, useCallback } from "react";
import PropTypes from "prop-types";

import Checkboxes from "./Checkboxes/Checkboxes";
import Dropdown from "@restart/ui/esm/Dropdown";

const Filter = (props) => {
  const { filter_key, filter_obj, selectedFilterSet, onFilterClick } = props;

  const createFilter = useCallback(() => {
    switch (filter_obj.input) {
      case 1:
        return (
          <Checkboxes
            filter_key={filter_key}
            filter_obj={filter_obj}
            selectedFilterSet={selectedFilterSet}
            onFilterClick={onFilterClick}
          />
        );
      case 2:
        return (
          <Dropdown
            filter_key={filter_key}
            filter_obj={filter_obj}
            selectedFilterSet={selectedFilterSet}
            onFilterClick={onFilterClick}
          />
        );
      default:
        return <div></div>;
    }
  }, [filter_key, filter_obj, selectedFilterSet, onFilterClick]);

  return createFilter(props.filter_obj);
};

Filter.propTypes = {
  filter_key: PropTypes.string.isRequired,
  filter_obj: PropTypes.object.isRequired,
  selectedFilterSet: PropTypes.object.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default Filter;
