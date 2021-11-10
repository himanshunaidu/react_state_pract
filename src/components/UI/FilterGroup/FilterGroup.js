import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

import styles from "./FilterGroup.module.css";
import Filter from "./Filter/Filter";

const FilterGroup = (props) => {
  const { filters, selectedFilters, onFilterClick } = props;

  const filter_view = (
    <Container className={styles.container}>
      {Object.keys(filters).map((filter_key) => {
        const filter_obj = filters[filter_key];
        return (
          <Filter
            key={filter_obj.id}
            filter_key={filter_key}
            filter_obj={filter_obj}
            selectedFilterSet={selectedFilters[filter_key]}
            onFilterClick={onFilterClick}
          />
        );
      })}
    </Container>
  );

  return filter_view;
};

FilterGroup.propTypes = {
  filters: PropTypes.object.isRequired,
  selectedFilters: PropTypes.object.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default FilterGroup;
