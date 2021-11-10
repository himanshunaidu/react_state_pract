import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Pagination as RBPagination } from "react-bootstrap";

const Pagination = (props) => {
  const totalPages = Math.ceil(props.totalItemsCount / props.itemsCountPerPage);
  console.log(totalPages);

  const getPageRange = useCallback(() => {
    if (props.activePage > totalPages) {
      return [props.activePage];
    }

    const firstPage =
      Math.max(0, props.activePage - props.pageRangeDisplayed) + 1;
    const remainingPages =
      props.pageRangeDisplayed - (props.activePage - firstPage + 1);

    const pages = [];
    for (let i = firstPage; i <= props.activePage; i++) pages.push(i);
    for (let i = 1; i <= remainingPages; i++) pages.push(props.activePage + i);
    return pages;
  }, [props.activePage, props.pageRangeDisplayed]);

  const pages = getPageRange();

  const createPages = useCallback(() => {
    const items = [];
    pages.forEach((num) => {
      items.push(
        <RBPagination.Item key={num} active={num == props.activePage}>
          {num}
        </RBPagination.Item>
      );
    });
    return items;
  }, [props.activePage]);

  return (
    <>
      <RBPagination>
        <RBPagination.First />
        <RBPagination.Prev />
        {pages.length > 0 && pages[0] > 1 ? <RBPagination.Ellipsis /> : null}
        {createPages()}
        {pages.length > 0 && pages[pages.length - 1] < totalPages ? (
          <RBPagination.Ellipsis />
        ) : null}
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
