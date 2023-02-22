import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { GlobalInfo } from "../App";
import { useContext, useState } from "react";
function Question() {
  const { removeAllPattern } = useContext(GlobalInfo);
  const emptyArray = [];
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  };
  const [inputValue, setInputValue] = useState("");

  const answer = "4050";

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="max-w-[380px] max-h-[670px] lg:max-w-[1640px] overflow-hidden lg:overflow-hidden ">
      <div className="w-[375px] lg:w-[1280px] h-[667px] lg:h-[605px]  bg-gradient-to-tr  from-black to-blue-500 border-4 border-black">
        <form onSubmit={handleSubmit} className=" ">
          <label>
            <h1 className="text-center pt-[100px] font-semibold text-4xl text-white">
              what is "40"+"50"?
            </h1>
          </label>
          <div className="relative px-[77px] flex gap-4 pt-10 lg:relative lg:mx-[450px]">
            <input
              className="p-4 rounded-xl"
              placeholder="Enter the answer"
              type="password"
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue == answer ? (
              <button
                onClick={() => {
                  navTopage("/");
                  removeAllPattern(emptyArray);
                }}
              >
                <ArrowForwardIcon />
              </button>
            ) : (
              <button disabled>
                <ArrowForwardIcon />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Question;
