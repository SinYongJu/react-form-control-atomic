import React, { useEffect, useContext } from "react";
import EditTemplate from "./template/EditTemplate";
import SimpleButton, { BUTTON_THEME } from "../atoms/SimpleButton/SimpleButton";
import EditWebPost from "../organisms/EditWebPost/EditWebPost";
import { EDIT_STATE , EDIT_VALID_TEXT_LENGTH } from "../constants/edit_state";
import { EditContext } from "../context/EditContext";
import {
  useHistory
} from "react-router-dom";

const regex = /^[`~!@#$%^&*|\\'";:/?]/;
const EDIT_STATE_PROPERTY = 'state';
const ERROR_TEXT = '필수 항목 입니다. 특수문자 없이, 4글자 이상으로 작성해주세요.'
const editInputTitle = {
  id: "titleInp",
  name: "inputTitle",
  placeholder: "title",
  value: "",
  error : ERROR_TEXT,
  regex : regex
};
const editInputDesc = {
  id: "descInp",
  name: "inputDesc",
  placeholder: "description...",
  value: "",
  error : ERROR_TEXT,
  regex : regex
};
const buttonSubmit = {
  themeClass: BUTTON_THEME.RED,
  text: "submit"
};

const buttonCancel = {
  text: "cancel"
};
const validateInputValue = (value) => {
  if(value.length > EDIT_VALID_TEXT_LENGTH){
    let isRegValid = regex.test(value);
    return !isRegValid
  } 
  return false
};
function EditPage (){
  const history = useHistory();
  const {onEditSumbitHandler,onEditCancelHandler,editGetMode,editGetTarget} = useContext(EditContext)
  const [editCtx, editSetCtx] = React.useState({
    inputTitle : editInputTitle,
    inputDesc : editInputDesc,
    state : EDIT_STATE.INIT,
    isValid : false,
    mode : null
  });  
  useEffect(() => {
      editSetCtx(ctx => {
        let {contents, title , id} = editGetTarget();
        let targetId = id || null;
        let contentsValue = contents || ""
        let titleValue = title || ""
        return {
          ...ctx,
          inputTitle : {...ctx.inputTitle,value : titleValue},
          inputDesc : {...ctx.inputDesc, value : contentsValue},
          mode : editGetMode(),
          id : targetId
        }
      })
  },[editGetMode,editGetTarget]);

  const editPageUpdateCtxState = (name,value) => {
    editSetCtx(ctx => ({
        ...ctx,
        [name] : value
    }))
  }
  useEffect(()=>{
    if(editCtx.state === EDIT_STATE.INIT){
      if(editCtx.inputTitle.value.length > EDIT_VALID_TEXT_LENGTH && editCtx.inputDesc.value.length > EDIT_VALID_TEXT_LENGTH){
        editPageUpdateCtxState(EDIT_STATE_PROPERTY,EDIT_STATE.VALIDATING)
      }
      return
    }
    if(editCtx.isValid){
      editPageUpdateCtxState(EDIT_STATE_PROPERTY,EDIT_STATE.POSSIBLE)
    }else if(editCtx.inputTitle.value.length > EDIT_VALID_TEXT_LENGTH && editCtx.inputDesc.value.length > EDIT_VALID_TEXT_LENGTH){
      editPageUpdateCtxState(EDIT_STATE_PROPERTY,EDIT_STATE.VALIDATING)
    }else{
      editPageUpdateCtxState(EDIT_STATE_PROPERTY,EDIT_STATE.INSERTING)
    }
  },[editCtx.state,editCtx.isValid,editCtx.inputTitle.value,editCtx.inputDesc.value])
  
  const onEditChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    editSetCtx(ctx => {
      if(editCtx.state === EDIT_STATE.INIT){
        editPageUpdateCtxState(EDIT_STATE_PROPERTY,EDIT_STATE.INSERTING)
      }
      ctx[name].value = value;
      return {
        ...ctx
      };
    });
  };
  const editPageSetIsValid = (validBool1,validBool2 ) => {
    editSetCtx(ctx => {
      let isValid = (validBool1 && validBool2)
      return {
          ...ctx,
          isValid 
    }})
  }
  useEffect(() => {
    editPageSetIsValid(validateInputValue(editCtx.inputTitle.value),validateInputValue(editCtx.inputDesc.value))
  },[editCtx.state,editCtx.inputTitle.value, editCtx.inputDesc.value]);

  const editPageCreatePostBody = ({contents, title}) => {
    return {
      datetime: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
      contents,
      title,
      url: 'https://namu.wiki/w/%EC%9D%B4%ED%9A%A8%EB%A6%AC'
    }
  }
  const onEditSubmitButton = () => {
    try {
      onEditSumbitHandler({id : editCtx.id, body : editPageCreatePostBody(
        { contents : editCtx.inputDesc.value,
          title :editCtx.inputTitle.value})
        }
      ,onEditSubmitCallback)
    } catch (error) {
        console.log(error)
    }
  };
  
  const onEditSubmitCallback = () =>{
    history.push('/')
  }
  const editPageInitiate = () =>{
    editSetCtx({
      inputTitle: { ...editInputTitle },
      inputDesc: { ...editInputDesc },
      state : EDIT_STATE.INIT
    })
  }
  const onEditCancelButton = () => {
    onEditCancelHandler(editPageInitiate)
  };


  const editContents = {
    header: <h3>{editCtx.mode}.</h3>,
    body: (
      <EditWebPost
        editpost={editCtx !== null &&editCtx}
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
