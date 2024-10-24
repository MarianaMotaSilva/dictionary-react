import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition:</strong>
      <ul>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <li key={index}>
              <p>{definition.definition}</p>
              {definition.example && (
                <p>
                  <em>Example: {definition.example}</em>
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <div>
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      )}
    </div>
  );
}
