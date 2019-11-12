import React from "react";

function SampleButton(props) {
  const { onClick } = props;
  return <button onClick={onClick}>SampleButton</button>;
}

export default SampleButton;
