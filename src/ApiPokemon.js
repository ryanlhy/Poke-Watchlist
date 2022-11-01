import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function ApiPokemon() {
  const [gifSrc, setGifSrc] = useState("");
  const key = "OkvabOBh3AH2TdF89yjYbO2ajlTfK3zk";
  const APICall = async () => {
    const gifSrc = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    const res = await fetch(gifSrc);
    const json = await res.json();
    console.log("makeApiCall", json.data);
    setGifSrc(json.data.images.downsized_large.url);
  };

  useEffect(() => {
    APICall();
  }, []);

  return (
    <div>
      <Button onClick={APICall}>API Call</Button>
      <img src={gifSrc} alt="" />
    </div>
  );
}

export default ApiPokemon;
