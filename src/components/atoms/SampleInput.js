import React from "react";

function SampleInput(props) {
  const { onChange } = props;
  const sampleStyle = {
    outline: "1px solid"
  };
  return <input type="text" onChange={onChange} style={sampleStyle}></input>;
}

export default SampleInput;
