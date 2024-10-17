import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleReponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "00a3d0oe3b36e11ff9bf2a3fd4b8t806";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleReponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="d-flex justify-content-center mt-3">
        <input
          type="search"
          placeholder="Enter in a word"
          onChange={handleKeywordChange}
        ></input>
        <input type="submit" value="Define" className="ms-2"></input>
      </form>
      <div className="mt-3">
        <Results results={results} />
      </div>
    </div>
  );
}
