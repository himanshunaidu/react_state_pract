import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Pagination as RBPagination } from "react-bootstrap";

const Pagination = (props) => {
  const totalPages = Math.ceil(props.totalItemsCount / props.itemsCountPerPage);

  const createPages = useCallback(() => {
    const items = [];
    for (
      let i = 0;
      i < props.pageRangeDisplayed && i + props.activePage <= totalPages;
      i++
    ) {
      items.push(
        <RBPagination.Item key={i + props.activePage} active={i == 0}>
          {i + props.activePage}
        </RBPagination.Item>
      );
    }
    return items;
  }, [
    props.activePage,
    props.totalItemsCount,
    props.pageRangeDisplayed,
    props.itemsCountPerPage,
  ]);

  return (
    <>
      <RBPagination>
        <RBPagination.First />
        <RBPagination.Prev />
        {props.activePage != 1 ? <RBPagination.Ellipsis /> : null}
        {createPages()}
        {props.activePage != totalPages ? <RBPagination.Ellipsis /> : null}
        <RBPagination.Next />
        <RBPagination.Last />
      </RBPagination>
    </>
  );
};

Pagination.propTypes = {
  pageRangeDisplayed: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
};

export default Pagination;
