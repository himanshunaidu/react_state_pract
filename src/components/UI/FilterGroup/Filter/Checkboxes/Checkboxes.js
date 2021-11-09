import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

// import filters from "../../../../../data/filters";

const Checkboxes = (props) => {
  return (
    <>
      {
        //props.filter_obj
        props.filter_obj.filters.map((filter) => {
          return (
            <Container key={filter.filter_id}>
              <input type="checkbox" />
              <label>{filter.filter_name}</label>
            </Container>
          );
        })
      }
    </>
  );
};

export default Checkboxes;
