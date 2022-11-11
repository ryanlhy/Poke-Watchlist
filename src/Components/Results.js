import CardListing from "./Card/Card";
import React from "react";
import derivePriceFromUnstructuredData from "../deriveUnstructureData";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Results(props) {
  const convertSgd = 1.41;
  const [pokemonArray, setPokemonArray] = useState([]);
  const [cartCount, setCartCount] = useState(0); // create another cart to meet project requirements in GA

  const key = "4485d77b-72a5-4262-a292-e52f5be06f10";
  // const pageSize = 10;
  // let pokeName = "charizard";
  const callTenCharizard = async () => {
    const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:charizard&pageSize=10&api_key=${key}`;
    // const res = await fetch(urlSrc);
    // const json = await res.json();
    // await setPokemonArray(json.data[0].images.small);
    // return json.data[0].images.small;
    apiFunc(urlSrc);
  };

  const callApiSearch = async () => {
    if (props.search === "") {
      console.log("did not call api from search");
    } else {
      // reset at every search query
      let pageSize = 10;
      if (props.page === "searchpage") {
        pageSize = 50;
      }
      const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:${props.search}&pageSize=${pageSize}&${props.pageNum}&api_key=${key}`;
      apiFunc(urlSrc);
    }
    // if dont return any pokemon, enter set name?
  };

  const apiFunc = (urlSrc) => {
    // const urlSrc = `https://api.pokemontcg.io/v2/cards?q=name:${props.search}&pageSize=${pageSize}&api_key=${key}`;
    const fetchPromise = fetch(urlSrc);
    //promise chaining
    fetchPromise
      .then((response) => response.json())
      .then((data) => {
        setPokemonArray(data.data);
      })
      .catch((err) => {
        // catch error : cannot read propertie of undefined reading 'prices'
      });
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
  }, [props.search, props.pageNum]);

  // const derivePriceFromUnstructuredData = (arr) => {
  //   let price = 0;
  //   // console.log(arr.cardmarket.prices.avg30);
  //   // Take the usual data point
  //   if (arr.cardmarket) {
  //     price = arr.cardmarket.prices.avg30;
  //     return price;
  //   }

  //   //tcgplayer has either normal or holofoil
  //   // Look for tcgplayer.prices.low
  //   price = arr.tcgplayer.prices.low ? arr.tcgplayer.prices.low : 0;
  //   if (price > 0) return price; // return if value is set

  //   price = arr.tcgplayer.prices.holofoil
  //     ? arr.tcgplayer.prices.holofoil.mid
  //     : 0;
  //   if (price > 0) return price;

  //   price = arr.tcgplayer.prices.normal ? arr.tcgplayer.prices.normal.mid : 0;
  //   if (price > 0) return price;

  //   return 0;
  // };

  const handleNetValueIncrease = (pricesSgd) => {
    setCartCount(cartCount + pricesSgd);
  };

  const handleNetValueDecrease = (pricesSgd) => {
    setCartCount(cartCount - pricesSgd);
  };

  return (
    <div className="h-100">
      <Container className="float-right">
        <h1>
          <Badge bg="secondary">Value: ${cartCount}</Badge>
        </h1>
      </Container>
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
                parseInt(derivePriceFromUnstructuredData(arr)) * convertSgd
              )}
              key={i}
              handleNetValueIncrease={handleNetValueIncrease}
              handleNetValueDecrease={handleNetValueDecrease}
            />
          );
        })}
      </Container>
      {pokemonArray !== [] ? (
        // <Link to="/search">
        <Button variant="primary" type="submit" onClick={props.handlePageNum}>
          Search More
        </Button>
      ) : (
        // </Link>
        <h1></h1>
      )}
      <Alert>hi</Alert>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search,
    searchResults: state.searchResults, // not needed anymore?
    pageNum: state.pageNum,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchPoke: (searchArr) =>
      dispatch({ type: "SEARCH/RESULTS", value: searchArr }),
    handlePageNum: () => dispatch({ type: "PAGENUMBER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
