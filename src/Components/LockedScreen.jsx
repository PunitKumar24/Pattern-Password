import React, { useState, useContext } from "react";
import PatternLock from "react-pattern-lock";
import { useNavigate } from "react-router-dom";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GlobalInfo } from "../App";
function LockedScreen() {
  const { path1 } = useContext(GlobalInfo);

  const [count, setCount] = useState(0);
  const [path3, setPath3] = useState([]);
  const [disabled3, setDisabled3] = useState(false);
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  };
  const reset = () => {
    // Renable the pattern
    setDisabled3(false);
    // Clear the pattern.
    setPath3([]);
  };

  //count on every wrong

  const handleIncorrectAttempts = () => {
    setCount(count + 1);
  };
  console.log("wrong attempt", count);

  const jsonpath1 = JSON.stringify(path1.flat());

  const jsonpath3 = JSON.stringify(path3.flat());

  return (
    <div className="max-w-[380px] max-h-[670px] lg:max-w-[1640px] overflow-hidden lg:overflow-hidden ">
      <div className="w-[375px] lg:w-[1280px] h-[667px] lg:h-[605px]  bg-gradient-to-tl  from-gray-300 to-gray-500 border-4 border-black">
        {count >= 5 ? (
          <div className="w-[375px] lg:w-[1280px] h-[667px] lg:h-[605px]  bg-gradient-to-tl  from-red-700 to-red-200 border-4 border-black">
            <h1 className="text-center  pt-[100px] lg:pt-[250px] font-semibold text-4xl lg:relative ">
              The Device has been Lockdown for 30 Seconds
            </h1>
          </div>
        ) : (
          <h1 className="text-center  pt-[100px] lg:pt-[50px] font-semibold text-4xl">
            LOCKED SCREEN
          </h1>
        )}

        <div className="relative top-[100px] left-[30px]">
          {count >= 5 ? (
            setTimeout(() => {
              setCount(0);
            }, 30000)
          ) : (
            <div className=" relative top-[10px] lg:top-[-5px] w-[300px] lg:mx-[460px] ">
              <PatternLock
                className="border-2 rounded-xl"
                path={path3}
                width={300}
                size={3}
                disabled={disabled3}
                // onchange is called every time a point is touched
                onChange={(path3) => setPath3(path3)}
                // We disable the pattern lock when the user finishes drawing a pattern so they can no longer modify it.
                onFinish={() => {
                  setDisabled3(true);
                }}
                style={{
                  margin: "0 auto",
                }}
              />

              <button
                className="relative border-2 border-sky-600 rounded-full p-2 top-[18px] left-[10px] bg-sky-500"
                onClick={() => {
                  navTopage("/question");
                }}
              >
                <QuestionMarkIcon />
              </button>
              <div className="relative bottom-[400px] text-center">
                <p className="text-xl">
                  You got{" "}
                  <span className="text-2xl text-red-700 ">{5 - count}</span>{" "}
                  chance
                </p>
              </div>
              {jsonpath1 != jsonpath3 ? (
                <button
                  onClick={() => {
                    handleIncorrectAttempts();
                    reset();
                  }}
                  className=" p-4 rounded-lg  relative bottom-[66px] left-[240px] "
                >
                  <ArrowForwardIcon />
                </button>
              ) : (
                <button
                  onClick={() => {
                    navTopage("/");
                  }}
                  className=" p-4 rounded-lg  relative bottom-[60px] left-[230px] "
                >
                  <ArrowForwardIcon />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LockedScreen;
