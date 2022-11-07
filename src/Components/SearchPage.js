import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import CardListing from "./Card/Card";
import Results from "./Results";
import Search from "./Search";

function SearchPage(props) {
  const key = "4485d77b-72a5-4262-a292-e52f5be06f10";

  const convertSgd = 1.41;
  // console.log(props.searchResults);

  // const [pokeSearch, setPokeSearch] = useState("");

  // const callApiSearch = async () => {
  //   setPokeSearch(props.search);
  //   // const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:${pokeSearch}&pageSize=10&api_key=${key}`;
  //   const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:charizard&pageSize=10&api_key=${key}`;

  //   const fetchPromise = fetch(urlSrc);
  //   fetchPromise
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokeSearch(data.data);
  //     });
  // };

  // useEffect(() => {
  //   callApiSearch();
  // }, []);

  return (
    <div>
      <h1>Search Page</h1>
      <Search />
      <Results />
      {/* {pokeSearch !== "" ? (
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
      ) : (
        <h1>no results</h1>
      )} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchResults: state.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
