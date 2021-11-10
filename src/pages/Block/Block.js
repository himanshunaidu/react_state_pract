import React, { Fragment, useState, useReducer, useCallback } from "react";
import { Container } from "react-bootstrap";

import styles from "./Block.module.css";
import FilterGroup from "../../components/UI/FilterGroup/FilterGroup";
import CardsDisplay from "../../components/UI/CardsDisplay/CardsDisplay";
import Pagination from "../../components/UI/Pagination/Pagination";
import cardData from "../../data/cards";
import filters from "../../data/filters";

const initializeSelectedFilters = () => {
  const selectedFilters = {};
  Object.keys(filters).forEach((key) => {
    selectedFilters[key] = new Set();
  });
  return selectedFilters;
};

const Block = (props) => {
  const [selectedFilters, setSelectedFilters] = useState(
    initializeSelectedFilters()
  );
  const [activePage, setActivePage] = useState(1);

  const selectionChanged = useCallback((page) => {
    setActivePage(page);
  }, []);

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
          <CardsDisplay cardData={cardData}></CardsDisplay>
        </div>
        <Container
          style={{
            gridRow: "second-row / last-row",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Pagination
            activePage={activePage}
            totalItemsCount={cardData.length}
            itemsCountPerPage={2}
            pageRangeDisplayed={3}
            onPageClick={selectionChanged}
          ></Pagination>
        </Container>
      </div>
    </Container>
  );
};

export default Block;
