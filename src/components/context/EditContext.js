import React, { createContext, useState, useEffect } from "react";
import { fetchCommon, fetchCustomPOST } from "../util/api";
import { webpostDeleteOptionByid,webpostPostCreate } from "../constants/edit_api";


const EDIT_PAGE_MODE = {
  CREATE : 'CREATE',
  MODIFY : 'MODIFY',
}

export const EditContext = createContext(null);
export const EditProvider = ({ children, ...rest }) => {
  const getMode = ()=>{
    return EDIT_PAGE_MODE['CREATE']
  }
  const [ editMode, editSetMode] = useState({mode : getMode()})
  

  const webpostCreate = (body) => {
    try {
      const reqOption = webpostPostCreate()
      fetchCustomPOST({...reqOption},body)  
    } catch (error) {
      console.log(error)
    }
  }

  const webpostDelete = (id) => {
    try {
      const reqOption = webpostDeleteOptionByid(id)
      fetchCommon({...reqOption})  
    } catch (error) {
      console.log(error)
    }
  }

  const onEditDeleteHandler = (id) => {
    webpostDelete(id)
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
      default : 
        return ()=>{ 
          console.log('submit')
        }
    }
  }


  

  const value = {
    onEditSumbitHandler : onEditSumbitHandler(editMode.mode),
    onEditDeleteHandler
  }

  return (
    <EditContext.Provider value={value} {...rest}>
      {children}
    </EditContext.Provider>
  );
};
export const EditConsumer = EditContext.Consumer;