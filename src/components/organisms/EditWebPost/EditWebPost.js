import React from "react";
import InputInfo from "../../molecule/InputInfo/InputInfo";

const EditWebPost = props => {
  const { editpost, ...rest } = props;
  const { inputTitle, inputDesc , state, mode, target} = editpost;
  return (
    <div className="EditWebPost">
      {(mode === 'DELETE' || mode === 'MODIFY') && <strong>{target}</strong>}
      <InputInfo {...inputTitle} state={state} text={"Title :"} {...rest} />
      <InputInfo {...inputDesc}  state={state} text={"Description :"} {...rest} />
    </div>
  );
};

export default EditWebPost;
