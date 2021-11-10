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

  const filterChanged = useCallback(
    (filter_key, filter_id) => {
      console.log(selectedFilters, filter_key, filter_id);
      setSelectedFilters((sf) => {
        const newSF = { ...sf };
        const newSFSet = newSF[filter_key];
        if (newSFSet.has(filter_id)) {
          newSFSet.delete(filter_id);
        } else {
          newSFSet.add(filter_id);
        }
        return newSF;
      });
    },
    [selectedFilters]
  );

  const pageChanged = useCallback((page) => {
    setActivePage(page);
  }, []);

  return (
    <Container className={styles.container} fluid>
      <div style={{ gridColumn: "first-col / second-col" }}>
        <FilterGroup
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterClick={filterChanged}
        ></FilterGroup>
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
            onPageClick={pageChanged}
          ></Pagination>
        </Container>
      </div>
    </Container>
  );
};

export default Block;
