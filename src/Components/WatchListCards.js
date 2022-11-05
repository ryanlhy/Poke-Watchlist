import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { connect } from "react-redux";

function WatchListCards(props) {
  return (
    <div>
      {props.watchList.map((arr, i) => {
        return (
          <Card key={i} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={arr.image} />
            <Card.Body>
              <Card.Title>{arr.name}</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  props.handleDelete(i);
                }}
              >
                Delete
              </Button>{" "}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    watchList: state.watchList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (index) =>
      dispatch({ type: "WATCHLIST/REMOVE", value: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchListCards);
