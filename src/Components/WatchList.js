import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WatchListCards from "./WatchListCards";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function WatchList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1>Your Watch List</h1>
      <Container>
        <WatchListCards />
        {props.watchList.length === 0 ? (
          <div>
            <h2>Nothing Here Yet</h2>
            <Link to="/">
              <Button variant="primary">Find More Cards</Button>
            </Link>{" "}
          </div>
        ) : (
          <div>
            {/* <Link to="/"> */}
            <Button variant="primary" onClick={handleShow}>
              Submit
            </Button>
            {/* </Link> */}{" "}
            <Link to="/">
              <Button variant="primary">Continue Browsing</Button>
            </Link>
          </div>
        )}
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations! You have submitted your watchlist! Sit back, relax,
          while we scan the web for your cards!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
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
