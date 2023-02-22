import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalInfo } from "../App";

function EnterPattern() {
  const { removeAllPattern } = useContext(GlobalInfo);
  const emptyArray = [];
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="max-w-[380px] max-h-[670px] lg:max-w-[1640px]  overflow-hidden lg:overflow-hidden  ">
      <div className="w-[375px] lg:w-[1280px] h-[667px] lg:h-[605px]  bg-gradient-to-tl  from-purple-300 via-rose-500 to-black border-4 border-black">
        <h1 className="text-center pt-[100px] font-semibold text-4xl text-white">
          {time.toLocaleTimeString()}
        </h1>
        <h1 className="text-center pt-[100px] font-semibold text-6xl text-white font-PoiretOne">
          WELCOME
        </h1>
        <div className="flex gap-4 justify-center pt-10">
          <h1 className="pt-1 text-xl">Set Pattern</h1>
          <button
            onClick={() => {
              navTopage("/setpattern");
              removeAllPattern(emptyArray);
            }}
            className="border-2 p-1 rounded-lg"
          >
            <span>{">"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterPattern;
