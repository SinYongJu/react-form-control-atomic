import React, { createContext, useState, useEffect } from "react";
import { fetchCommon, fetchCustomPOST } from "../util/api";
import {
  webpostDeleteOptionByid,
  webpostPostCreate,
  webpostGetOptionByid,
  webpostPostModify
} from "../constants/edit_api";
import { useParams, useHistory } from "react-router-dom";
import { EDIT_PAGE_MODE } from "../constants/edit_state";

export const EditContext = createContext(null);
export const EditProvider = ({ children, ...rest }) => {
  let { mode, id } = useParams();
  const history = useHistory();
  const [editMode, editSetMode] = useState({ mode: null, target: {} });

  useEffect(() => {
    const getMode = () => {
      return EDIT_PAGE_MODE[mode.toUpperCase()];
    };
    const getTarget = id => {
      if (!id) {
        return;
      }
      try {
        const reqOption = webpostGetOptionByid(id);
        fetchCommon({ ...reqOption }).then(data =>
          editSetMode(ctx => {
            const { title, contents } = data;
            const target = { id, title, contents };
            return {
              ...ctx,
              target
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    editSetMode(ctx => ({
      ...ctx,
      mode: getMode()
    }));
    if (
      getMode() === EDIT_PAGE_MODE.MODIFY ||
      getMode() === EDIT_PAGE_MODE.DELETE
    ) {
      getTarget(id);
    }
  }, [mode, id]);

  const webpostCreate = body => {
    try {
      const reqOption = webpostPostCreate();
      fetchCustomPOST({ ...reqOption }, body);
    } catch (error) {
      console.log(error);
    }
  };
  const webpostModify = (id, body) => {
    try {
      const reqOption = webpostPostModify(id);
      fetchCustomPOST({ ...reqOption }, body).then(data => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };
  const webpostDelete = id => {
    if (!id) {
      return;
    }
    try {
      const reqOption = webpostDeleteOptionByid(id);
      fetchCommon({ ...reqOption });
    } catch (error) {
      console.log(error);
    }
  };
  const onEditSumbitHandler = mode => {
    switch (mode) {
      case EDIT_PAGE_MODE.CREATE:
        return (param, callback) => {
          const { body } = param;
          webpostCreate(JSON.stringify(body));
          callback && callback();
        };
      case EDIT_PAGE_MODE.MODIFY:
        return (param, callback) => {
          const { body } = param;
          webpostModify(id, JSON.stringify(body));
          callback && callback();
        };
      case EDIT_PAGE_MODE.DELETE:
        return (param, callback) => {
          const { id } = param;
          webpostDelete(id);
          callback && callback();
        };
      default:
        return () => {
          console.log("Edit page Api func");
        };
    }
  };

  const editGetMode = () => editMode.mode;
  const editGetTarget = () => editMode.target;

  const onEditCancelHandler = callback => {
    history.push("/");
    return callback && typeof callback === "function" ? callback() : null;
  };
  const value = {
    editGetMode,
    editGetTarget,
    onEditSumbitHandler: onEditSumbitHandler(editMode.mode),
    onEditCancelHandler
  };

  return (
    <EditContext.Provider value={value} {...rest}>
      {children}
    </EditContext.Provider>
  );
};
export const EditConsumer = EditContext.Consumer;
