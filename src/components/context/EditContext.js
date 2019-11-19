import React, { createContext, useState, useEffect } from "react";
import { fetchCommon, fetchCustomPOST } from "../util/api";
import { webpostDeleteOptionByid,webpostPostCreate } from "../constants/edit_api";
import {  useParams } from "react-router-dom";
import { EDIT_PAGE_MODE } from "../constants/edit_state";

export const EditContext = createContext(null);
export const EditProvider = ({ children, ...rest }) => {
 
  let { mode,id } = useParams()
  console.log(useParams())
  const [ editMode, editSetMode] = useState({ mode : null, target : {} })
  
  useEffect(() => {
    const getMode = ()=>{
      return EDIT_PAGE_MODE[mode.toUpperCase()]
    }
    const getTarget = ()=>{
      return id ? id : null
    }
    editSetMode(ctx => ({
      ...ctx,
      mode : getMode(),
      target : getTarget()
    }))
  },[mode]);

  const webpostCreate = (body) => {
    try {
      const reqOption = webpostPostCreate()
      fetchCustomPOST({...reqOption},body)  
    } catch (error) {
      console.log(error)
    }
  }

  const webpostDelete = (id) => {
    if(!id){
      return 
    }
    try {
      const reqOption = webpostDeleteOptionByid(id)
      fetchCommon({...reqOption})  
    } catch (error) {
      console.log(error)
    }
  }
  const onEditSumbitHandler = (mode) => {
    switch (mode) {
      case EDIT_PAGE_MODE.CREATE :
        return (body)=>{
          webpostCreate(body)
        }
      case EDIT_PAGE_MODE.MODIFY :
        return (body)=>{
          webpostCreate(body)
        }
      case EDIT_PAGE_MODE.DELETE :
        return (id)=>{
          webpostDelete(id)
        }
      default : 
        return ()=>{ 
          console.log('submit')
        }
    }
  }

  const editGetMode = () => editMode.mode
  const editSetTarget = (id) => {
    editSetMode(ctx => ({
      ...ctx,
      target : {id},
    }))
  } 
  const editGetTarget = () => editMode.target
  

  const value = {
    editGetMode,
    editGetTarget,
    onEditSumbitHandler : onEditSumbitHandler(editMode.mode),
  }

  return (
    <EditContext.Provider value={value} {...rest}>
      {children}
    </EditContext.Provider>
  );
};
export const EditConsumer = EditContext.Consumer;