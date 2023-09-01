import React, { useEffect, useState } from "react";
import "./QuestionCard.css";
const QuestionCard = ({
  questionsData,
  count,
  setCount,
  score,
  setScore,
  setModal,
  modal,
}) => {
  const [timer, setTimer] = useState(30);
  const selectedAnswer = (e) => {
    console.log(e.target.value);
    const checkAnswer =
      e.currentTarget.value == questionsData[count]?.correct_answer;
    //sectiğim seçeneğin doğru mu olduğunu kontrol ederim
    console.log(checkAnswer);
    if (checkAnswer) {
      setScore(score + 100);
    }
    setCount(count + 1);
    if (count == 9) {
      setModal(true);
    }

    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  return (
    <div className="flex  flex-col w-[100%] h-[100%s] bg-pink-400 shadow-pink-700 shadow-inner">
      <div className="flex flex-col  w-full h-[80%] items-center">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-purple-700 shadow-2xl p-5">
          <div className=" flex  justify-center items-center w-12 h-12 rounded-full bg-pink-900 shadow-xl p-3">
            <p className="text-white font-bold">{timer}</p>
          </div>
        </div>
        <div className="flex w-[80%] h-[30%] bg-pink-950 rounded-md mb-3 mt-4 justify-center items-center p-2 m-10 text-white font-bold">
          {questionsData[count]?.question}
        </div>
        {questionsData[count]?.answers?.map((answer, i) => {
          return (
            <button
              key={i}
              value={answer}
              onClick={selectedAnswer}
              className="w-[80%] h-[30px] bg-yellow-300 border-1 border-2 m-2 "
            >
              {answer}
            </button>
          );
        })}
      </div>
      <div className="flex justify-end ">
        <button className="w-12 h-12 bg-purple-400 rounded-full  m-2 ">
          {count + 1}/10
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
