import React from "react";
import "./style.css";

function EmployeeSearchResults(props) {
  return (
    <div>
      <span onClick={() => props.searchName()} className="">
        Name
      </span>
      <ul className="list-group search-results">
        {props.results.map((result) => (
          <li key={result.dob.date} className="list-group-item">
            <img
              alt="employee"
              src={result.picture.thumbnail}
              className="img-fluid"
            />
            {" " + result.name.first}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeSearchResults;
