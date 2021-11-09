import React, { Fragment } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

// import filters from "../../../../../data/filters";

const Checkboxes = (props) => {
  return (
    <>
      {
        //props.filter_obj
        props.filter_obj.filters.map((filter) => {
          return (
            <InputGroup>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
          );
        })
      }
    </>
  );
};

export default Checkboxes;
