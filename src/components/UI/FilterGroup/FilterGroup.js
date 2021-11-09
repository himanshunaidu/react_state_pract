import React, { useState } from "react";
import { Container } from "react-bootstrap";

import styles from "./FilterGroup.module.css";
import filters from "../../../data/filters";
import Filter from "./Filter/Filter";

const FilterGroup = (props) => {
  const filter_view = (
    <Container className={styles.container}>
      {Object.keys(filters).map((filter_key) => {
        const filter_obj = filters[filter_key];
        return <Filter key={filter_obj.id} filter_obj={filter_obj} />;
      })}
    </Container>
  );

  return filter_view;
};

export default FilterGroup;
