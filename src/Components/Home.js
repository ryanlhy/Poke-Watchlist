import Button from "react-bootstrap/Button";
import Something from "./SignUpForm";
// import Form from "react-bootstrap/Form";
import SignUpForm from "./SignUpForm";
import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <h1>Pokemon TCG Watchlist</h1>

      <SignUpForm />

      <Button>Danger!</Button>
    </div>
  );
}

export default Home;
