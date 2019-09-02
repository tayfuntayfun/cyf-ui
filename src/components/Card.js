import React from "react";
import Button from "./Button";

const Card = props => {
  return (
    <article className={props.className} style={props.style}>
      {props.divider && (
        <span style={{ backgroundColor: "#E0E0E0", width: "40%" }}>
          <img />
        </span>
      )}
      <div className={props.btnBodyHeaderContainer}>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <div className={props.buttonsContainerClass}>
          <Button
            label="Button"
            className="btn-primary-outline"
            style={{ width: "30%" }}
          />
          <Button
            label="Button"
            className="btn-primary-outline"
            style={{ width: "30%" }}
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
