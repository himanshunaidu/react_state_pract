import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

import styles from "./Checkboxes.module.css";

// import filters from "../../../../../data/filters";

const Checkboxes = (props) => {
  const { filter_key, filter_obj, selectedFilterSet, onFilterClick } = props;

  return (
    <Container className={styles.container}>
      <h3>{filter_obj.title}</h3>
      {
        //props.filter_obj
        filter_obj.filters.map((filter) => {
          return (
            <div className={styles.input_container} key={filter.filter_id}>
              <input
                type="checkbox"
                id={filter.filter_id}
                name={filter.filter_id}
                value={filter.filter_id}
                checked={selectedFilterSet.has(filter.filter_id)}
                onChange={() => onFilterClick(filter_key, filter.filter_id)}
              />
              <label htmlFor={filter.filter_id}>{filter.filter_name}</label>
            </div>
          );
        })
      }
    </Container>
  );
};

Checkboxes.propTypes = {
  filter_key: PropTypes.string.isRequired,
  filter_obj: PropTypes.object.isRequired,
  selectedFilterSet: PropTypes.object.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default Checkboxes;
