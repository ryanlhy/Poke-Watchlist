import CardListing from "./Card/Card";
import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

function Results(props) {
  const convertSgd = 1.41;
  const [pokemonArray, setPokemonArray] = useState([]);

  const key = "4485d77b-72a5-4262-a292-e52f5be06f10";
  // const pageSize = 10;
  // let pokeName = "charizard";

  const callTenCharizard = async () => {
    const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:charizard&pageSize=10&api_key=${key}`;
    // const res = await fetch(urlSrc);
    // const json = await res.json();
    // await setPokemonArray(json.data[0].images.small);
    // return json.data[0].images.small;
    const fetchPromise = fetch(urlSrc);
    //promise chaining
    fetchPromise
      .then((response) => response.json())
      .then((data) => {
        setPokemonArray(data.data);
      });
  };

  const callApiSearch = async () => {
    if (props.search === "") {
      console.log("did not call api from search");
    } else {
      let pageSize = 10;
      if (props.page === "searchpage") {
        pageSize = 30;
      }
      apiFunc(pageSize);
      //   const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:${props.search}&pageSize=${pageSize}&api_key=${key}`;
      //   const fetchPromise = fetch(urlSrc);
      //   fetchPromise
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setPokemonArray(data.data);
      //     })
      //     .catch((err) => {
      //       // some code here
      //     });
      // }
      // if dont return any pokemon, enter set name?
    }

    const apiFunc = (pageSize) => {
      const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:${props.search}&pageSize=${pageSize}&api_key=${key}`;
      const fetchPromise = fetch(urlSrc);
      fetchPromise
        .then((response) => response.json())
        .then((data) => {
          setPokemonArray(data.data);
        })
        .catch((err) => {
          // some code here
        });
    };
  };

  useEffect(() => {
    // check if empty array, dont procees with useEffect
    if (pokemonArray !== []) {
      if (props.search === "") {
        callTenCharizard();
      } else {
        callApiSearch();
      }
    }
  }, [props.search]);

  return (
    <Container className="rowC bg-light">
      {pokemonArray.map((arr, i) => {
        return (
          <CardListing
            className="p-5"
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
      <h1>Load more...button here</h1>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchResults: state.searchResults, // not needed anymore?
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchPoke: (searchArr) =>
      dispatch({ type: "SEARCH/RESULTS", value: searchArr }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
