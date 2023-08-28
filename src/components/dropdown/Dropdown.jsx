import React from "react";
const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className="mb-5">
      <select
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
        className="w-[350px] h-[50px] bg-slate-300 rounded-md"
      >
        {data.map((dt, i) => {
          return (
            <option key={i} value={dt}>
              {dt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
