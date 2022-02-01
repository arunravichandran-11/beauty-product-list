import React from "react";
import "./page.scss";
const Pagination = ({ totalPages, currentPage, onNext, onPrevious }: any) => {
  return (
    <section className="pagination">
      <button
        type="button"
        className="page-nav-button"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      {
        <div style={{ padding: 10 }}>
          Page {currentPage} of {totalPages}
        </div>
      }

      <button
        type="button"
        className="page-nav-button"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        <i className="fa fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default Pagination;
