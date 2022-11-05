import CardListing from "./Card/Card";
import React from "react";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

function Results() {
  const convertSgd = 1.41;

  // console.log("results component run");
  const [pokemonArray, setPokemonArray] = useState([]);
  const testArray = [1, 2, 3, 4, 5, 6, 7];
  const callTenCharizard = async () => {
    const key = "4485d77b-72a5-4262-a292-e52f5be06f10";
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
        // console.log("data");
        // console.log(data.data);
        setPokemonArray(data.data);
      });
  };
  useEffect(() => {
    // const asyncFunction = async () => {
    //   callTenCharizard();
    // };
    // asyncFunction();
    callTenCharizard();
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
                qty={0}
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
export default Results;
