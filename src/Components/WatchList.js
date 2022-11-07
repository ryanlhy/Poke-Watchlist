import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WatchListCards from "./WatchListCards";
import { Container } from "react-bootstrap";

function WatchList(props) {
  return (
    <div>
      <h1>Your Watch List</h1>
      <Container>
        <WatchListCards />
        {props.watchList.length === 0 ? (
          <h2>Nothing Here Yet</h2>
        ) : (
          <div>
            <Link to="/">
              <Button variant="primary">Submit</Button>
            </Link>{" "}
            <Link to="/">
              <Button variant="primary">Continue Browsing</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    watchList: state.watchList,
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
