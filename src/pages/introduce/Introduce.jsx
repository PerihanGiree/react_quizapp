import React, { useState } from "react";
import Logo from "../../assets/images/logo.jpg";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
const Introduce = () => {
  const difficulty = ["Any Difficulty", "easy", "medium", "hard"];
  const TOTAL_QUESTIONS = 10;
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };
  return (
    <div className=" flex w-full h-[100vh] bg-fuchsia-400">
      <div className="flex-initial w-2/4  pl-16 pt-16 justify-center items-center">
        <img
          className="w-[350px] h-[350px] p-5 rounded-full"
          src={Logo}
          alt=""
        />
      </div>

      <div className="flex-initial w-2/4 m-20 mt-32">
        <div className=" ">
          <Dropdown
            className="bg-slate-600 border-1 border-fuchsia-800"
            data={difficulty}
            setDifficultyChange={setDifficultyChange}
          />
        </div>
        <div
          onClick={startQuiz}
          className="w-[350px] h-[50px] text-[18px]  bg-[#621be7] text-white border-1  rounded-md flex items-center justify-center mt-2 cursor-pointer"
        >
          Start Quiz
        </div>
      </div>
    </div>
  );
};

export default Introduce;
