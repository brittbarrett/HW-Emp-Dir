import React from "react";
import "./style.css";

function EmployeeSearchResults(props) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <button onClick={() => props.sortName()} className="">
            Name
          </button>

          <button
            onClick={() => props.sortEmail()}
            className="btn btn-outline-primary"
          >
            Email
          </button>
          <button
            onClick={() => props.sortDOB()}
            className="btn btn-outline-primary"
          >
            Birthday
          </button>
        </div>

        <ul className="">
          {props.results.map((result) => (
            <div key={result.dob.date} className="list-group-item bg-light">
              <div className="row bg-light">
                <div className="col-3 bg-light">
                  <li className="list-group-item text-center profileArea max-width: 100%; bg-light">
                    <img
                      alt="employee"
                      src={result.picture.large}
                      className="img-fluid img-thumbnail rounded"
                    />
                  </li>
                </div>
                <div className="col-9">
                  <li className="list-group-item">
                    {" " + result.name.first + " " + result.name.last}
                  </li>
                  <li className="list-group-item">{" " + result.phone}</li>
                  <li className="list-group-item">{" " + result.email}</li>
                  <li className="list-group-item">{" " + result.dob.date}</li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EmployeeSearchResults;
