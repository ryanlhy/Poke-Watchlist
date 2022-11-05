import CardListing from "./Card/Card";
import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

function Results(props) {
  const convertSgd = 1.41;

  // console.log("results component run");
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokeSearch, setPokeSearch] = useState("");

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
    const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:${pokeSearch}&pageSize=10&api_key=${key}`;
    const fetchPromise = fetch(urlSrc);
    fetchPromise
      .then((response) => response.json())
      .then((data) => {
        setPokeSearch(data.data);
        props.handleSearchPoke(data.data);
      });
  };

  useEffect(() => {
    callTenCharizard();
  }, []);

  useEffect(() => {
    // callApiSearch();
  }, []);

  return (
    <div>
      results page
      {pokemonArray !== [] ? (
        // mapPokemonArr()
        <Container>
          {pokemonArray.map((arr, i) => {
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
        <h1>Loading Results...</h1>
      )}
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
    handleSearchPoke: (searchArr) =>
      dispatch({ type: "SEARCH/RESULTS", value: searchArr }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
