import React from "react";
import Button from "../Button/Button";

export default function ControlPanel(props) {
  return (
    <ul className="controlpanel-container">
      {[...Array(props.floors)].map((_, index) => (
        <Button key={index + 1} elevatorid={props.elevatorid}>
          {index + 1}
        </Button>
      ))}
    </ul>
  );
}
