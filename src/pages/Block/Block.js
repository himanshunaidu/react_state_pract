import React, {
  Fragment,
  useState,
  useReducer,
  useCallback,
  useEffect,
} from "react";
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
  const [activePage, setActivePage] = useState(0);
  const [curCards, setCurCards] = useState(cardData);
  const itemsCountPerPage = 2;
  const pageRangeDisplayed = 3;
  const start = itemsCountPerPage * activePage;
  const end = Math.min(start + itemsCountPerPage, curCards.length);

  const filterChanged = useCallback((filter_key, filter_id) => {
    setSelectedFilters((sf) => {
      const newSFSet = new Set(sf[filter_key]);
      if (newSFSet.has(filter_id)) {
        newSFSet.delete(filter_id);
      } else {
        newSFSet.add(filter_id);
      }
      const newSF = { ...sf, [filter_key]: newSFSet };
      return newSF;
    });
  }, []);

  const pageChanged = useCallback((page) => {
    console.log(page);
    setActivePage(page.selected);
  }, []);

  useEffect(() => {
    const newCurCards = cardData.filter((card) => {
      let flag = true;
      Object.keys(selectedFilters).forEach((filter_key) => {
        const filterSet = selectedFilters[filter_key];
        if (filterSet.size === 0) {
          return true;
        }
        if (!filterSet.has(card[filter_key])) {
          flag = false;
        }
      });
      return flag;
    });
    setCurCards(newCurCards);
    setActivePage(0);
  }, [selectedFilters]);

  return (
    <Container className={styles.container} fluid>
      <div style={{ gridColumn: "first-col / second-col" }}>
        <FilterGroup
          filters={filters}
          selectedFilters={selectedFilters}
          onFilterClick={filterChanged}
        ></FilterGroup>
      </div>
      {curCards.length === 0 ? (
        <p>No Cards to Display</p>
      ) : (
        <div
          className={styles.card_container}
          style={{ gridColumn: "second-col / auto" }}
        >
          <div style={{ gridRow: "first-row / auto" }}>
            <CardsDisplay cardData={curCards.slice(start, end)}></CardsDisplay>
          </div>
          <Container
            style={{
              gridRow: "second-row / last-row",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Pagination
              activePage={activePage}
              totalItemsCount={curCards.length}
              itemsCountPerPage={itemsCountPerPage}
              pageRangeDisplayed={pageRangeDisplayed}
              onPageClick={pageChanged}
            ></Pagination>
          </Container>
        </div>
      )}
    </Container>
  );
};

export default Block;
