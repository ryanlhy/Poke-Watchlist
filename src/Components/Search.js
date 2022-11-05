import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

function Search(props) {
  console.log(props.search);
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Enter a Pokemon"
        className="me-2"
        aria-label="Search"
        onChange={(e) => props.handleChange(e)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch({ type: "SEARCH", value: e.target.value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
