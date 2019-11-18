import React, { useEffect } from "react";
import EditTemplate from "./template/EditTemplate";
import SimpleButton, { BUTTON_THEME } from "../atoms/SimpleButton/SimpleButton";
import EditWebPost from "../organisms/EditWebPost/EditWebPost";

const regexr = /^[`~!@#$%^&*|\\'";:/?]/;

const editInputTitle = {
  id: "titleInp",
  name: "inputTitle",
  placeholder: "title",
  value: "",
  isValid: false
};
const editInputDesc = {
  id: "descInp",
  name: "inputDesc",
  placeholder: "description...",
  value: "",
  isValid: false
};

const EditPage = () => {
  const [editCtx, editSetCtx] = React.useState({
    inputTitle: { ...editInputTitle },
    inputDesc: { ...editInputDesc },
    isEditDisabledButton: true
  });

  const onEditChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    editSetCtx(ctx => {
      ctx[name].value = value;
      return {
        ...ctx
      };
    });
    editValueValidate(name, value);
  };

  const editValueValidate = (name, value) => {
    let bool = regexr.test(value);
    if (!bool && value.length > 4) {
      editSetCtx(ctx => {
        ctx[name].isValid = true;
        return {
          ...ctx
        };
      });
    } else {
      editSetCtx(ctx => {
        ctx[name].isValid = false;
        return {
          ...ctx
        };
      });
    }
  };
  const buttonSubmit = {
    themeClass: BUTTON_THEME.RED,
    text: "submit"
  };
  const buttonCancel = {
    text: "cancel"
  };
  const onEditSubmitButton = () => {
    console.log("submit");
  };
  const onEditCancelButton = () => {
    console.log("cancel");
  };

  const editContents = {
    header: <h3>Edit.</h3>,
    body: (
      <EditWebPost
        editpost={editCtx}
        validate={editValueValidate}
        onChange={onEditChange}
      ></EditWebPost>
    ),
    buttonSubmit: (
      <SimpleButton
        {...buttonSubmit}
        state={editCtx.isEditDisabledButton ? "BUTTON_DISABLED" : null}
        onClick={onEditSubmitButton}
      />
    ),
    buttonCancel: (
      <SimpleButton {...buttonCancel} onClick={onEditCancelButton} />
    )
  };
  return (
    <>
      <EditTemplate contents={editContents} />
    </>
  );
};

export default EditPage;
