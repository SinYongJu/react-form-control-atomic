import React, { createContext, useState, useEffect } from "react";
import { fetchCommon, fetchCustomPOST } from "../util/api";
import { webpostGetOptionByid,webpostPostCreate } from "../constants/edit_api";


export const EditContext = createContext(null);
export const EditProvider = ({ children, ...rest }) => {
    
  const webpostCreate = (body) => {
    const reqOption = webpostPostCreate()
    console.log(fetchCustomPOST({...reqOption},body))
    // .then(data=>alert('성공'))
  }

  const value = {
    webpostCreate,
  }

  return (
    <EditContext.Provider value={value} {...rest}>
      {children}
    </EditContext.Provider>
  );
};
export const EditConsumer = EditContext.Consumer;