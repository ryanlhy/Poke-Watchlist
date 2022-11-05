import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// useselector gets a small slice of the state object
function CardListing(props) {
  const { name } = props;
  // console.log(props.propsObj);
  // not sure how to pass data from state to another component
  // const image = useSelector((state) => state.img);
  const convertSgd = 1.41; // can use an api
  return (
    <Col lg={true}>
      <Card className="flex-fill" border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {props.name} {props.setName} {props.number}/{props.printedTotal}
          </Card.Text>
          <Card.Title>
            {/* SGD ${Math.round(parseInt(props.prices) * convertSgd)} */}
            SGD ${props.pricesSgd}
          </Card.Title>
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
          <Card.Text>Watchlist: {props.watchList}</Card.Text>

          <Button
            variant="primary"
            onClick={() => {
              props.handleWatchlist(props);
            }}
          >
            Add to Watchlist
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

// step 1: define a mapStateToProps function
const mapStateToProps = (state) => {
  // ownprops can pass in props in component - optional
  return {
    // select part of the data needed from store in this component
    count: state.count,
  };
};

// step 2; define a mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
  // console.log("objfromprops");
  // console.log(objFromProps);
  return {
    handleIncrement: () => dispatch({ type: "INCREMENT", amount: 1 }),
    handleDecrement: () => dispatch({ type: "DECREMENT", amount: 1 }),
    handleReset: () => dispatch({ type: "RESET", value: 0 }),
    handleWatchlist: (val) => dispatch({ type: "WATCHLIST", value: val }),
  };
};

// step 3: connect the above two functions to redux
// ADD THIS ABOVE: import {connect} from "react-redux"
export default connect(mapStateToProps, mapDispatchToProps)(CardListing);

// export default CardListing;
