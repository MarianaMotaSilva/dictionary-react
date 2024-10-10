import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useSate({});

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    if (keyword) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      console.error("Keyword is empty. Please enter a valid word.");
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button type="submit">Search</button>{" "}
      </form>
    </div>
  );
}
