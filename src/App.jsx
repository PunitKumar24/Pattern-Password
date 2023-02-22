import SetPattern from "./Components/SetPattern";
import ConfirmPattern from "./Components/ConfirmPattern";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterPattern from "./Components/EnterPattern";
import LockedScreen from "./Components/LockedScreen";
import Question from "./Components/Question";
import React, { createContext, useEffect, useState } from "react";

const getLocalStorageData = () => {
  let gettingData = localStorage.getItem("path1");
  if (gettingData) {
    return JSON.parse(localStorage.getItem("path1"));
  } else {
    return [];
  }
};

export const GlobalInfo = createContext();

function App() {
  // const [pattern, setPattern] = useState([]);
  const [path1, setPath1] = useState(getLocalStorageData);

  const getPathData1 = (data1) => {
    setPath1([...path1, data1]);
  };

  //storing path1 pattern in local storage
  useEffect(() => {
    localStorage.setItem("path1", JSON.stringify(path1.flat()));
  }, [path1]);

  //getting path2 data
  const [path2, setPath2] = useState([]);
  const getPathData2 = (data2) => {
    setPath2([data2]);
  };
  //
  //remove all pattern
  const removeAllPattern = (get) => {
    setPath1(get);
  };

  return (
    <GlobalInfo.Provider
      value={{
        path1: path1,
        getPathData1: getPathData1,
        path2: path2,
        getPathData2: getPathData2,
        removeAllPattern: removeAllPattern,
      }}
    >
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EnterPattern />} />
            <Route path="/setpattern" element={<SetPattern />} />
            <Route path="/confirmpattern" element={<ConfirmPattern />} />
            <Route path="/lockedscreen" element={<LockedScreen />} />
            <Route path="/question" element={<Question />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </GlobalInfo.Provider>
  );
}

export default App;
