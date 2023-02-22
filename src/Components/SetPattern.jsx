import React, { useState, useContext } from "react";
import PatternLock from "react-pattern-lock";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GlobalInfo } from "../App";

function SetPattern() {
  const { removeAllPattern, getPathData1 } = useContext(GlobalInfo);
  const emptyArray = [];
  const [getPath1, setGetPath1] = useState([]);

  const [disabled1, setDisabled1] = useState(false);
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  };
  const reset = () => {
    // Renable the pattern
    setDisabled1(false);
    // Clear the pattern.
    setGetPath1([]);
  };

  return (
    <div className="max-w-[380px] max-h-[670px] lg:max-w-[1640px] overflow-hidden lg:overflow-hidden ">
      <div className="w-[375px] lg:w-[1280px] h-[667px] lg:h-[605px] bg-gradient-to-tl  from-teal-300 to-blue-500 border-4 border-black">
        <button onClick={() => navTopage("/")} className="m-4">
          <ArrowBackIcon />
        </button>
        <h1 className="text-center pt-[100px] lg:pt-[60px] font-semibold text-4xl">
          Set Pattern
        </h1>
        <div className=" mt-10">
          <PatternLock
            path={getPath1}
            width={300}
            size={3}
            disabled={disabled1}
            // onchange is called every time a point is touched
            onChange={(getPath1) => setGetPath1(getPath1)}
            // We disable the pattern lock when the user finishes drawing a pattern so they can no longer modify it.
            onFinish={() => {
              setDisabled1(true);
            }}
            style={{
              margin: "0 auto",
            }}
          />

          {/* A button that is used to reset the pattern */}
          <div className="flex justify-between lg:justify-center lg:gap-[250px]  ">
            <button
              className="border-2 p-4 rounded-lg  "
              onClick={() => {
                reset();
                removeAllPattern(emptyArray);
              }}
            >
              Reset
            </button>
            {getPath1.length <= 1 ? (
              <div>
                <p className="text-xs lg:text-md absolute  left-[120px] lg:left-[570px] text-red-800 ">
                  please enter the pattern
                </p>
                <button
                  disabled
                  onClick={() => navTopage("/confirmpattern")}
                  className=" border-2 p-4 rounded-lg "
                >
                  Confirm
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  navTopage("/confirmpattern");
                  getPathData1(getPath1);
                }}
                className=" border-2 p-4 rounded-lg "
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPattern;
