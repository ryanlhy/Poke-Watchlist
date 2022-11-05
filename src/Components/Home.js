import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import SignUpForm from "./SignUpForm";
// import Navigation from "./Navigation";
import React from "react";

import Results from "./Results";
import ApiPokemon from "../ApiPokemon";
import Search from "./Search";

function Home() {
  return (
    <div>
      <h1>Pokemon TCG Watchlist</h1>
      <Search />
      <Results />
      {/* <SignUpForm /> */}
      <ApiPokemon />
      <Button>Danger!</Button>
    </div>
  );
}

export default Home;
