import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
// import { Pagination as RBPagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const {
    pageRangeDisplayed,
    activePage,
    itemsCountPerPage,
    totalItemsCount,
    onPageClick,
  } = props;

  const pageCount = Math.ceil(totalItemsCount / itemsCountPerPage);
  console.log(pageCount, totalItemsCount, itemsCountPerPage);

  return (
    <ReactPaginate
      previousLabel="PREV"
      nextLabel="NEXT"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageClick}
      containerClassName="pagination"
      activeClassName="active"
      forcePage={activePage}
    ></ReactPaginate>
  );
};

Pagination.propTypes = {
  pageRangeDisplayed: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pagination;
