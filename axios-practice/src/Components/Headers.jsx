import axios from "axios";
import { useState } from "react";

const url = "https://icanhazdadjoke.com/";

export const Headers = () => {
  const [joke, setJoke] = useState("Random Dad Joke");

  const fetchDadJoke = async () => {
    try {
      const response = await axios(url, {
        headers: { Accept: "application/json" },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <h1>Dad Jokes</h1>
      <button onClick={fetchDadJoke}>click for random dad joke!</button>
      <h3>{joke}</h3>
    </>
  );
};
