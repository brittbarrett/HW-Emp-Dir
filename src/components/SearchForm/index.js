import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="container">
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Employee Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employee"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Type in a current employee's name to begin"
            id="employee"
          />
          <datalist id="employees">
            {props.employees.map((employee) => (
              <option value={employee} key={employee} />
            ))}
          </datalist>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
