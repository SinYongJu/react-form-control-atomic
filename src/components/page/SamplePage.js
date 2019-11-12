import React, { useState } from "react";
import SampleTemplate from "./template/SampleTemplate";
import SampleOrga from "../organisms/SampleOrga";

function SamplePage() {
  const sampleData = ["lukas", "sin", "똑바로", "해라"];
  const [sampleList, setList] = useState([]);
  const [inputValue, setInput] = useState("");

  const onClick = () => {
    sampleData.push(inputValue);
    setList(sampleData);
    alert("clicked by samplePage");
  };

  const onChange = e => {
    setInput(e.target.value);
    console.log("changed by samplePage");
  };

  const onClean = () => {
    setList([]);
    alert("clean list by Samplepage");
  };

  return (
    <div>
      <SampleTemplate
        sampleOrga={
          <SampleOrga
            onClick={onClick}
            onChange={onChange}
            onClean={onClean}
            sampleList={sampleList}
          ></SampleOrga>
        }
      ></SampleTemplate>
    </div>
  );
}

export default SamplePage;
