import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Search"
          onClick={() => props.handlePageChange("Search")}
          className={
            props.currentPage === "Search" ? "nav-link active" : "nav-link"
          }
        >
          Search Employee Directory
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
