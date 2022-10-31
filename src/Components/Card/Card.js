import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { connect } from "react-redux";

function CardListing(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={props.handleIncrement}>
          +
        </Button>
        <Button variant="primary" onClick={props.handleDecrement}>
          -
        </Button>
        <Button variant="primary" onClick={props.handleReset}>
          Delete
        </Button>
        <Card.Text>Qty: {props.count}</Card.Text>
      </Card.Body>
    </Card>
  );
}

// step 1: define a mapStateToProps function
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// step 2; define a mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch({ type: "INCREMENT" }),
    handleDecrement: () => dispatch({ type: "DECREMENT" }),
    handleReset: () => dispatch({ type: "RESET", value: 0 }),
  };
};

// step 3: connect the above two functions to redux
// ADD THIS ABOVE: import {connect} from "react-redux"
export default connect(mapStateToProps, mapDispatchToProps)(CardListing);

// export default CardListing;
