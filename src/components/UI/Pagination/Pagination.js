import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Pagination as RBPagination } from "react-bootstrap";

const Pagination = (props) => {
  const {
    pageRangeDisplayed,
    activePage,
    itemsCountPerPage,
    totalItemsCount,
    onPageClick,
  } = props;

  const totalPages = Math.ceil(totalItemsCount / itemsCountPerPage);
  const [pageItems, setPageItems] = useState([]);

  const getPageRange = useCallback(() => {
    if (activePage > totalPages) {
      return [activePage];
    }

    const firstPage = Math.max(0, activePage - pageRangeDisplayed) + 1;
    const remainingPages = pageRangeDisplayed - (activePage - firstPage + 1);

    const pages = [];
    for (let i = firstPage; i <= activePage; i++) pages.push(i);
    for (let i = 1; i <= remainingPages; i++) pages.push(activePage + i);
    return pages;
  }, [activePage, totalPages, pageRangeDisplayed]);

  const pages = getPageRange();

  const createPages = useCallback(() => {
    const items = [];
    pages.forEach((num) => {
      items.push(
        <RBPagination.Item
          key={num}
          active={num === activePage}
          onClick={() => onPageClick(num)}
        >
          {num}
        </RBPagination.Item>
      );
    });
    return items;
  }, [activePage, onPageClick, pages]);

  return (
    <>
      <RBPagination>
        <RBPagination.First onClick={() => onPageClick(1)} />
        <RBPagination.Prev
          onClick={() => onPageClick(Math.max(activePage - 1), 1)}
        />
        {pages.length > 0 && pages[0] > 1 ? <RBPagination.Ellipsis /> : null}
        {createPages()}
        {pages.length > 0 && pages[pages.length - 1] < totalPages ? (
          <RBPagination.Ellipsis />
        ) : null}
        <RBPagination.Next
          onClick={() => onPageClick(Math.min(activePage + 1, totalPages))}
        />
        <RBPagination.Last onClick={() => onPageClick(totalPages)} />
      </RBPagination>
    </>
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
