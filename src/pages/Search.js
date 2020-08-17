import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import EmployeeSearchResults from "../components/EmployeeSearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    employeeArray: [],
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployee().then((employeeResult) =>
      this.setState({ employeeArray: employeeResult.data.results })
    );
  }

  // SORT BY NAME - WORKING
  sortName = () => {
    console.log(this.state.employeeArray.sort());
    this.setState({
      employeeArray: this.state.employeeArray.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      ),
    });
  };

  // SORT BY DATE OF BIRTH - WORKS
  sortDOB = () => {
    console.log(
      this.state.employeeArray.sort((a, b) =>
        parseInt(a.dob.date) > parseInt(b.dob.date) ? 1 : -1
      )
    );
    this.setState({
      employeeArray: this.state.employeeArray.sort((a, b) =>
        parseInt(a.dob.date) > parseInt(b.dob.date) ? 1 : -1
      ),
    });
  };

  // SORT BY EMAIL - WORKS
  sortEmail = () => {
    console.log(
      this.state.employeeArray.sort((a, b) => (a.email > b.email ? 1 : -1))
    );

    this.setState({
      employeeArray: this.state.employeeArray.sort((a, b) =>
        a.email > b.email ? 1 : -1
      ),
    });
  };

  // HANDLE CHANGE OF INPUT AREA
  handleInputChange = (event) => {
    console.log("handleinputchange working");
    this.setState({ search: event.target.value });
    //you will need to do some algo to find ppl
    //1. you have to sort through youremployarr
    //once it is good
    //2. you update the state of your employarr
  };

  // HANDLE FORM SUBMIT
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getEmployee(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search for employee!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>

          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            // handleInputok

            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />

          <EmployeeSearchResults
            sortName={this.sortName}
            results={this.state.employeeArray}
            sortDOB={this.sortDOB}
            sortEmail={this.sortEmail}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
