import React, { useEffect } from "react";
import EditTemplate from "./template/EditTemplate";
import SimpleButton, { BUTTON_THEME } from "../atoms/SimpleButton/SimpleButton";
import EditWebPost from "../organisms/EditWebPost/EditWebPost";
import { EDIT_STATE , EDIT_VALID_TEXT_LENGTH } from "../constants/edit_state";


const regexr = /^[`~!@#$%^&*|\\'";:/?]/;

const ERROR_TEXT = '필수 항목 입니다. 특수문자 없이, 4글자 이상으로 작성해주세요.'

const editInputTitle = {
  id: "titleInp",
  name: "inputTitle",
  placeholder: "title",
  value: "",
  isValid: false,
  error : ERROR_TEXT
};
const editInputDesc = {
  id: "descInp",
  name: "inputDesc",
  placeholder: "description...",
  value: "",
  isValid: false,
  error : ERROR_TEXT
};



const EditPage = () => {
  const [editCtx, editSetCtx] = React.useState({
    inputTitle: { ...editInputTitle },
    inputDesc: { ...editInputDesc },
    state : EDIT_STATE.INIT
  });
  const editSetState = (value) => {
    editSetCtx(ctx => ({
        ...ctx,
        state : value
    }))
  }
  useEffect(()=>{
    if(editCtx.state === EDIT_STATE.INIT){
        return
    }
    if(editCtx.inputTitle.isValid&&editCtx.inputDesc.isValid){
        editSetState(EDIT_STATE.POSSIBLE)
    }else if(editCtx.inputTitle.value.length > EDIT_VALID_TEXT_LENGTH && editCtx.inputDesc.value.length > EDIT_VALID_TEXT_LENGTH){
        editSetState(EDIT_STATE.VALIDATING)
    }else{
        editSetState(EDIT_STATE.INSERTING)
    }
  },[editCtx.state,editCtx.inputTitle.isValid,editCtx.inputDesc.isValid,editCtx.inputTitle.value,editCtx.inputDesc.value])

  
  const onEditChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    editSetCtx(ctx => {
      if(editCtx.state === EDIT_STATE.INIT){
        editSetState(EDIT_STATE.INSERTING)
      }
      
      editValueValidate(name, value);
      ctx[name].value = value;
      return {
        ...ctx
      };
    });

  };



  const editValueValidate = (name, value) => {
    let isRegValid = regexr.test(value);
    if (!isRegValid && value.length > EDIT_VALID_TEXT_LENGTH) {
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
        onChange={onEditChange}
      ></EditWebPost>
    ),
    buttonSubmit: (
      <SimpleButton
        {...buttonSubmit}
        state={editCtx.state === EDIT_STATE.POSSIBLE ? null : "BUTTON_DISABLED" }
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
