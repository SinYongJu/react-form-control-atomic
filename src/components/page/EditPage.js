import React, { useEffect, useContext } from "react";
import EditTemplate from "./template/EditTemplate";
import SimpleButton, { BUTTON_THEME } from "../atoms/SimpleButton/SimpleButton";
import EditWebPost from "../organisms/EditWebPost/EditWebPost";
import { EDIT_STATE , EDIT_VALID_TEXT_LENGTH } from "../constants/edit_state";
import { EditContext } from "../context/EditContext";


const regexr = /^[`~!@#$%^&*|\\'";:/?]/;

const ERROR_TEXT = '필수 항목 입니다. 특수문자 없이, 4글자 이상으로 작성해주세요.'

const editInputTitle = {
  id: "titleInp",
  name: "inputTitle",
  placeholder: "title",
  value: "",
  isValid: false,
  error : ERROR_TEXT,
  regex : regexr
};
const editInputDesc = {
  id: "descInp",
  name: "inputDesc",
  placeholder: "description...",
  value: "",
  isValid: false,
  error : ERROR_TEXT,
  regex : regexr
};

const EditPage = () => {
  const [editCtx, editSetCtx] = React.useState({
    inputTitle: { ...editInputTitle },
    inputDesc: { ...editInputDesc },
    state : EDIT_STATE.INIT
  });

  const {webpostCreate} = useContext(EditContext)
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
      ctx[name].value = value;
      return {
        ...ctx
      };
    });

  };
  const editValueValidate = (name, value,regex) => {
    let isRegValid = regex.test(value);
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
    try {
        let body = {
            datetime: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
            contents: editCtx.inputDesc.value,
            title: editCtx.inputTitle.value,
            url: 'https://namu.wiki/w/%EC%9D%B4%ED%9A%A8%EB%A6%AC'
        }
        webpostCreate(JSON.stringify(body))
    } catch (error) {
        console.log(error)
    }
  
  };
  const onEditCancelButton = () => {
    console.log("cancel");
    editSetCtx({
        inputTitle: { ...editInputTitle },
        inputDesc: { ...editInputDesc },
        state : EDIT_STATE.INIT
      })
  };

  const editContents = {
    header: <h3>Edit.</h3>,
    body: (
      <EditWebPost
        editpost={editCtx}
        onChange={onEditChange}
        validate={editValueValidate}
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
