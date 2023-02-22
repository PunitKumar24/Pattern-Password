import React, { useState, useContext } from "react";
import PatternLock from "react-pattern-lock";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GlobalInfo } from "../App";

function ConfirmPattern() {
  const { removeAllPattern, path1, getPathData2 } = useContext(GlobalInfo);
  console.log("path", path1);
  const jsonpath1 = JSON.stringify(path1.flat());
  console.log("JSON 1", jsonpath1);
  const [getPath2, setGetPath2] = useState([]);
  console.log("getpath", getPath2);
  const jsongetpath2 = JSON.stringify(getPath2.flat());
  console.log("JSON 2", jsongetpath2);
  const [disabled2, setDisabled2] = useState(false);
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  };
  const reset = () => {
    // Renable the pattern
    setDisabled2(false);
    // Clear the pattern.
    setGetPath2([]);
  };
  const emptyArray = [];
  return (
    <div className="max-w-[380px] max-h-[670px] lg:max-w-[1640px] overflow-hidden lg:overflow-hidden ">
      <div className="w-[375px] lg:w-[1280px] h-[667px] lg:h-[605px] bg-gradient-to-tl  from-teal-500 to-blue-500 border-black">
        <button
          onClick={() => {
            navTopage("/");
            removeAllPattern(emptyArray);
          }}
          className="m-4"
        >
          <ArrowBackIcon />
        </button>
        <h1 className="text-center pt-[100px] lg:pt-[60px] font-semibold text-4xl">
          Confirm Pattern
        </h1>
        <div className=" mt-10">
          <PatternLock
            className=""
            path={getPath2}
            width={300}
            size={3}
            disabled={disabled2}
            // onchange is called every time a point is touched
            onChange={(getPath2) => setGetPath2(getPath2)}
            // We disable the pattern lock when the user finishes drawing a pattern so they can no longer modify it.
            onFinish={() => {
              setDisabled2(true);
            }}
            style={{
              margin: "0 auto",
            }}
          />

          {/* A button that is used to reset the pattern */}
          <div className="flex justify-between lg:justify-center lg:gap-[250px]">
            <button className="border-2 p-4 rounded-lg  " onClick={reset}>
              Reset
            </button>
            {jsonpath1 == jsongetpath2 ? (
              <button
                onClick={() => {
                  navTopage("/lockedscreen");
                  getPathData2(getPath2);
                }}
                className=" border-2 p-4 rounded-lg "
              >
                Confirm
              </button>
            ) : (
              <div>
                <p className="text-xs lg:text-md absolute  left-[120px] lg:left-[570px] text-red-800  ">
                  please enter the correct pattern
                </p>
                <button disabled className=" border-2 p-4 rounded-lg ">
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPattern;
