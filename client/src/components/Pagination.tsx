import React, { useState } from "react";
// propTYpes

export const Pagination = ({ handlePageChanged }: any) => {
  const [clickedPage, setclickedPage] = useState(1);
  const count = 82;
  const pageItems = [];

  for (let page = 1; page < Math.round(count) / 9; page++) {
    pageItems.push(
      <li
        className={
          //selected page is highlighted
          clickedPage === page ? "page-item active" : "page-item"
        }
      >
        <a
          href="/"
          className="page-link"
          onClick={(event: any) => {
            setclickedPage(page);
            event.preventDefault();
            handlePageChanged(page);
          }}
        >
          {page}
        </a>
      </li>
    );
  }

  return (
    <div className="section-pagination">
      <ul className="pagination">
        <li className="page-item previous">
          <a href="/" className="page-link">
            <i className="previous"></i>
          </a>
        </li>
        {pageItems}

        <li
          className={
            //disable next button if last page

            clickedPage === Math.round(count) / 9
              ? "page-item disabled next"
              : "page-item next"
          }
        >
          <a href="/" className="page-link">
            <i className="next"></i>
          </a>
        </li>
      </ul>
      <div className="fs-6 fw-normal  text-gray-700  ">
        Showing 1 to 10 of {count} characters
      </div>
    </div>
  );
};
