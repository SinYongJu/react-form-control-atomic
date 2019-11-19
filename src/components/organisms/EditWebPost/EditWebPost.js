import React from "react";
import InputInfo from "../../molecule/InputInfo/InputInfo";

const EditWebPost = props => {
  const { editpost, ...rest } = props;
  const { inputTitle, inputDesc , state} = editpost;
  return (
    <div className="EditWebPost">
      <InputInfo {...inputTitle} state={state} text={"Title :"} {...rest} />
      <InputInfo {...inputDesc}  state={state} text={"Description :"} {...rest} />
    </div>
  );
};

export default EditWebPost;
