import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={image.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src.landscape}
                    className="img-fluid"
                    alt={props.keyword}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
