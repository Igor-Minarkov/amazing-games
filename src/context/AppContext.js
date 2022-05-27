import React, { createContext, useState } from "react";
import presenters from "../data/presenters";
import tables from "../data/tables";
import uuid from "react-uuid";

export const Context = createContext({});

export const Provider = (props) => {
  const [presentersData, setPresentersData] = useState(presenters.data);
  const [tablesData, setTablesData] = useState(tables.data);
  let [customSetter] = useState();

  const setSetter = (setter) => {
    if (setter === true) {
      customSetter = setPresentersData;
    } else {
      customSetter = setTablesData;
    }
  };

  const addData = (title, customData, setter) => {
    setSetter(setter);
    customSetter((customData) => [
      ...customData,
      { name: title, id: uuid(), currTable: null },
    ]);
  };

  const deleteData = (id, customData, setter) => {
    setSetter(setter);
    customSetter(customData.filter((customData) => customData.id !== id));
  };

  const edit = (title, id, customData, setter) => {
    setSetter(setter);
    const mappedArr = customData.map((task) =>
      task.id === id ? { name: title, id: id, currTable: null } : task
    );

    customSetter(mappedArr);
  };

  const appContext = {
    presentersData,
    setPresentersData,
    tablesData,
    setTablesData,
    addData,
    deleteData,
    edit,
  };

  return (
    <Context.Provider value={appContext}>{props.children}</Context.Provider>
  );
};

export const AppProvider = Provider;
export const AppContext = Context;
