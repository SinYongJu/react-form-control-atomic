import React from "react";

function SampleList(props) {
  const { sampleList } = props;
  return (
    <div>
      <ul>
        {sampleList.map(sample => {
          return <li>{sample}</li>;
        })}
      </ul>
    </div>
  );
}

export default SampleList;
