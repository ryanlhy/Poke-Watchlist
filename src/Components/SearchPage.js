import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import CardListing from "./Card/Card";

function SearchPage(props) {
  const convertSgd = 1.41;
  console.log(props.searchResults);
  return (
    <div>
      <h1>Search Page</h1>
      <Container>
        {props.searchResults.map((arr, i) => {
          return (
            <CardListing
              propsObj={arr}
              name={arr.name}
              image={arr.images.small}
              number={arr.number}
              printedTotal={arr.set.printedTotal}
              setName={arr.set.name}
              pricesSgd={Math.round(
                parseInt(arr.cardmarket.prices.avg30) * convertSgd
              )}
              key={i}
            />
          );
        })}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // not needed
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
