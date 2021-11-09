import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import styles from "./Checkboxes.module.css";

// import filters from "../../../../../data/filters";

const Checkboxes = (props) => {
  return (
    <Container className={styles.container}>
      <h3>{props.filter_obj.title}</h3>
      {
        //props.filter_obj
        props.filter_obj.filters.map((filter) => {
          return (
            <div className={styles.input_container} key={filter.filter_id}>
              <input
                type="checkbox"
                id={filter.filter_id}
                name={filter.filter_id}
                value={filter.filter_id}
              />
              <label htmlFor={filter.filter_id}>{filter.filter_name}</label>
            </div>
          );
        })
      }
    </Container>
  );
};

export default Checkboxes;
