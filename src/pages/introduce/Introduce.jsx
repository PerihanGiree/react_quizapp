import React, { useState } from "react";
import Logo from "../../assets/images/logo.jpg";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
const Introduce = () => {
  const difficulty = ["Any Difficulty", "easy", "medium", "hard"];
  const categoryList = [
    {
      id: 9,
      name: "General Knowlage",
    },
    {
      id: 10,
      name: "Books",
    },
    {
      id: 11,
      name: "Film",
    },
    {
      id: 12,
      name: "Music",
    },
    {
      id: 13,
      name: "Musicals & Theatres",
    },
    {
      id: 14,
      name: "Television",
    },
    {
      id: 15,
      name: "Video Games",
    },
    {
      id: 16,
      name: "Board Games",
    },
    {
      id: 17,
      name: "Science & Nature",
    },
    {
      id: 18,
      name: "Science & Computer",
    },
    {
      id: 19,
      name: "Science & Mathematic",
    },
    {
      id: 20,
      name: "Mythology",
    },
    {
      id: 21,
      name: "Sports",
    },
    {
      id: 22,
      name: "Geography",
    },
    {
      id: 23,
      name: "History",
    },
    {
      id: 24,
      name: "Politics",
    },
    {
      id: 25,
      name: "Art",
    },
    {
      id: 26,
      name: "Celebrities",
    },
    {
      id: 27,
      name: "Animals",
    },
    {
      id: 28,
      name: "Vehicles",
    },
    {
      id: 29,
      name: "Comics",
    },
    {
      id: 30,
      name: "Gadgets",
    },
    {
      id: 31,
      name: "Japanese Anime & Manga",
    },
    {
      id: 32,
      name: "Cartoon & Animations",
    },
  ];
  const TOTAL_QUESTIONS = 10;
  const [difficultyChange, setDifficultyChange] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };
  return (
    <div className=" flex flex-col w-full h-[100vh] justify-center items-center   md:flex-row lg:flex-row  bg-fuchsia-400 ">
      <div className="m-10 flex flex-col  md:flex-row lg:flex-row">
        <div>
          <img
            className="  w-[40%] h-[40%]  mb-8 ml-24 rounded-lg md:w-[60%] md:h-[60%] lg:w-[60%] l:h-[60%]"
            src={Logo}
            alt=""
          />
        </div>

        <div className="">
          <div className=" ">
            <Dropdown
              data={difficulty}
              setDifficultyChange={setDifficultyChange}
            />
          </div>
          {/* <Dropdown
    data={categoryList.map((isim) => {
      return isim.name;
    })}
    setCategory={setCategory.map((id) => {
      return id.id;
    })}
  /> */}
          <div
            onClick={startQuiz}
            className="flex  text-white w-[84%] h-[40%] p-2 justify-center items-center rounded-md bg-blue-600 sm:w-[350px] lg:h-[50px] md:w-[350px] md:h-[50px] lg:w-[350px] lg:[50px]"
          >
            Start Quiz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
