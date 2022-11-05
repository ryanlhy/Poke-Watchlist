import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WatchListCards from "./WatchListCards";

function WatchList(props) {
  // function here
  console.log(props);
  return (
    // stuff here
    <div>
      <h1>Your Watch List</h1>
      <WatchListCards />
      <Link to="/">
        <Button variant="primary">Submit</Button>
      </Link>
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
