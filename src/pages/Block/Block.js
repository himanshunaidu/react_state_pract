import React, { Fragment, useState, useReducer } from "react";
import { Container } from "react-bootstrap";

import styles from "./Block.module.css";
import FilterGroup from "../../components/UI/FilterGroup/FilterGroup";
import CardsDisplay from "../../components/UI/CardsDisplay/CardsDisplay";

const Block = (props) => {
  return (
    <Container className={styles.container} fluid>
      <div style={{ gridColumn: "first-col / second-col" }}>
        <FilterGroup></FilterGroup>
      </div>
      <div
        className={styles.card_container}
        style={{ gridColumn: "second-col / auto" }}
      >
        <div style={{ gridRow: "first-row / auto" }}>
          <CardsDisplay></CardsDisplay>
        </div>
        <div style={{ gridRow: "second-row / last-row" }}></div>
      </div>
    </Container>
  );
};

export default Block;
