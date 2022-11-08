import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

// useselector gets a small slice of the state object
function CardListing(props) {
  const { name } = props;
  const [toggleButtonAdd, setToggleButtonAdd] = useState(false);

  // console.log(props.propsObj);
  // not sure how to pass data from state to another component
  // const image = useSelector((state) => state.img);
  const convertSgd = 1.41; // can use an api
  return (
    <Card
      className="flex-fill p-2 m-2"
      // border="secondary"
      style={{ width: "14rem" }}
    >
      <div className="card-effects">
        <Card.Img variant="top" src={props.image} />
      </div>
      <Card.Body>
        <Card.Title>
          {props.name} {props.setName} {props.number}/{props.printedTotal}
        </Card.Title>
        <Card.Text></Card.Text>
        <Card.Title>
          {/* SGD ${Math.round(parseInt(props.prices) * convertSgd)} */}
          SGD ${props.pricesSgd}
        </Card.Title>
      </Card.Body>
      {toggleButtonAdd === false ? (
        <Button
          variant="primary"
          onClick={() => {
            props.handleWatchlist(props);
            setToggleButtonAdd(true);
            console.log(props.watchList);
          }}
        >
          Add
        </Button>
      ) : (
        <Button
          variant="secondary"
          // handleDelete takes in an index
          onClick={() => {
            props.handleDelete(
              props.watchList.findIndex((watchList) => {
                // find by id of the card
                return watchList.propsObj.id === props.propsObj.id;
              })
            );
            setToggleButtonAdd(false);
            console.log(props.watchList);
          }}
        >
          Added
        </Button>
      )}
    </Card>
  );
}

// step 1: define a mapStateToProps function
const mapStateToProps = (state) => {
  // ownprops can pass in props in component - optional
  return {
    // select part of the data needed from store in this component
    count: state.count,
    watchList: state.watchList,
  };
};

// step 2; define a mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
  return {
    // handleIncrement: () => dispatch({ type: "INCREMENT", amount: 1 }),
    // handleDecrement: () => dispatch({ type: "DECREMENT", amount: 1 }),
    // handleReset: () => dispatch({ type: "RESET", value: 0 }),
    handleWatchlist: (val) => dispatch({ type: "WATCHLIST", value: val }),
    handleDelete: (index) =>
      dispatch({ type: "WATCHLIST/REMOVE", value: index }),
  };
};

// step 3: connect the above two functions to redux
// ADD THIS ABOVE: import {connect} from "react-redux"
export default connect(mapStateToProps, mapDispatchToProps)(CardListing);

// export default CardListing;
