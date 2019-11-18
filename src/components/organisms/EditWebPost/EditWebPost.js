import React from "react";
import InputInfo from "../../molecule/InputInfo/InputInfo";

const EditWebPost = props => {
  const { editpost, ...rest } = props;
  const { inputTitle, inputDesc } = editpost;
  return (
    <div className="EditWebPost">
      <InputInfo {...inputTitle} text={"Title :"} {...rest} />
      <InputInfo {...inputDesc} text={"Description :"} {...rest} />
    </div>
  );
};

export default EditWebPost;
