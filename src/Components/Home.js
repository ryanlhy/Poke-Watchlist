import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import SignUpForm from "./SignUpForm";
// import Navigation from "./Navigation";
import React from "react";

import Results from "./Results";

function Home() {
  return (
    <div>
      <h1>Pokemon TCG Watchlist</h1>
      <Results />
      {/* <SignUpForm /> */}

      <Button>Danger!</Button>
    </div>
  );
}

export default Home;
