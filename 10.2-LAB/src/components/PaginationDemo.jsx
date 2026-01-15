import React, { useState } from 'react';
import { usePagination } from '../hooks/usePagination';

export function PaginationDemo() {
  const [totalItems, setTotalItems] = useState(123);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(totalItems, itemsPerPage);

  // make some fake items to display
  const allItems = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
  const currentItems = allItems.slice(startIndex, endIndex + 1);

  // create buttons for each page number
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="demo-section">
      <h2>Pagination Demo</h2>
      
      <div className="controls">
        <div className="control-group">
          <label>Items per page:</label>
          <input
            type="number"
            min="1"
            max="50"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value) || 10)}
          />
        </div>
        <div className="control-group">
          <label>Total Items:</label>
          <span>{totalItems}</span>
        </div>
      </div>

      <div className="items-container">
        {currentItems.map((item, index) => (
          <div key={startIndex + index} className="item">
            {item}
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button
          onClick={prevPage}
          disabled={!canPrevPage}
          className="btn btn-primary"
        >
          Previous
        </button>

        <div className="page-info">
          <span>Page</span>
          <span className="current-page">{currentPage}</span>
          <span>of {totalPages}</span>
        </div>

        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>

      <div className="items-info">
        Showing items {startIndex + 1} - {endIndex + 1} (Total on this page: {itemsOnCurrentPage})
      </div>

      <div className="page-numbers">
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            className={`page-btn ${pageNum === currentPage ? 'active' : ''}`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
}