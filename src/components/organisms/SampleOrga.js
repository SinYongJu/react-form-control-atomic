import React from "react";
import SampleMole from "../molecule/SampleMole";
import SampleList from "../molecule/SampleList";

function SampleOrga(props) {
  const { sampleList, ...rest } = props;
  return (
    <div>
      <SampleMole {...rest}></SampleMole>
      <SampleList sampleList={sampleList}></SampleList>
    </div>
  );
}

export default SampleOrga;
