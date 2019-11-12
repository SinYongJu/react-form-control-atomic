import React from "react";
import SampleOrga from "../../organisms/SampleOrga";

function SampleTemplate(props) {
  const { sampleOrga } = props;
  return (
    <div>
      <div>{sampleOrga}</div>
    </div>
  );
}

export default SampleTemplate;
