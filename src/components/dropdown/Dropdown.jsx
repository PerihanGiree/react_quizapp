import React from "react";
const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className="mb-5">
      <select
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
        className="w-[84%]  h-10 md:w-[350px] md:h-[50px] lg:w-[350px] lg:h-[50px]  bg-slate-300 rounded-md"
      >
        {data.map((dt, i) => {
          return (
            <option
              key={i}
              value={dt}
              className="flex w-[80%] h-[20%] md:w-[350px] md:h-[50px] lg:w-[350px] lg:h-[50px]"
            >
              {dt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
