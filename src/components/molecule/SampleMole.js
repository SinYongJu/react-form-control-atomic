import React from "react";
import SampleInput from "../atoms/SampleInput";
import SampleButton from "../atoms/SampleButton";

function SampleMole(props) {
  const { onChange, onClick, onClean } = props;
  return (
    <div>
      <label>Sample</label>
      <SampleInput onChange={onChange}></SampleInput>
      <SampleButton onClick={onClick}></SampleButton>
      <br></br>
      <SampleButton onClick={onClean}></SampleButton>
    </div>
  );
}

export default SampleMole;
