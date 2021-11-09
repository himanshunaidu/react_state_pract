import React, { Fragment, useState, useReducer } from "react";
import { Container } from "react-bootstrap";

import styles from "./Block.module.css";
import FilterGroup from "../../components/UI/FilterGroup/FilterGroup";
import CardsDisplay from "../../components/UI/CardsDisplay/CardsDisplay";

const Block = (props) => {
  return (
    <Container className={styles.container} fluid>
      <div style={{ gridColumn: "first / second" }}>
        <FilterGroup></FilterGroup>
      </div>
      <div style={{ gridColumn: "second / auto" }}>
        <CardsDisplay></CardsDisplay>
      </div>
    </Container>
  );
};

export default Block;
