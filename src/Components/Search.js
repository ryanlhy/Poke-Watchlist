import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Search(props) {
  useEffect(() => {});
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Enter a Pokemon"
        className="me-2"
        aria-label="Search"
        onChange={(e) => props.handleChange(e)}
      />
      <Link to="/search">
        <Button variant="outline-success">Search</Button>
      </Link>
    </Form>
  );
}
const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchResults: state.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch({ type: "SEARCH", value: e.target.value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
