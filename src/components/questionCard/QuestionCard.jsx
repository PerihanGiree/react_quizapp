import React, { useEffect, useState } from "react";
import "./QuestionCard.css";

const QuestionCard = ({
  questionsData,
  user1Count,
  setUser1Count,
  user1Score,
  setUser1Score,
  user2Count,
  setUser2Count,
  user2Score,
  setUser2Score,
  setModal,
  modal,
  switchPlayer,
  title,
  currentPlayer,
}) => {
  const [timer, setTimer] = useState(30);

  const selectedAnswer = (e) => {
    const checkAnswer =
      e.currentTarget.value ===
      questionsData[currentPlayer === 1 ? user1Count : user2Count]
        ?.correct_answer;

    if (checkAnswer) {
      if (currentPlayer === 1) {
        setUser1Score(user1Score + 100);
      } else {
        setUser2Score(user2Score + 100);
      }
    }

    if (currentPlayer === 1) {
      setUser1Count(user1Count + 1);
      if (user1Count === 9) {
        setModal(true);
      }
    } else {
      setUser2Count(user2Count + 1);
      if (user2Count === 9) {
        setModal(true);
      }
    }

    setTimer(30);
    switchPlayer(); // Oyuncu değişimi burada yapılır.
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        if (currentPlayer === 1 && user1Count < 9) {
          setUser1Count(user1Count + 1);
          setTimer(30);
        } else if (currentPlayer === 2 && user2Count < 9) {
          setUser2Count(user2Count + 1);
          setTimer(30);
        } else {
          setModal(true);
        }
        switchPlayer(); // Zaman aşımı durumunda oyuncu değişimi yapılır.
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="flex flex-col w-[100%] h-[100%s] bg-pink-400 shadow-pink-700 shadow-inner">
      <div className="flex flex-col w-full h-[80%] items-center">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-purple-700 shadow-2xl p-5">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-pink-900 shadow-xl p-3">
            <p className="text-white font-bold">{timer}</p>
          </div>
        </div>
        <div className="font-bold">{title}</div>
        <div className="flex w-[80%] h-[30%] bg-pink-950 rounded-md mb-3 mt-4 justify-center items-center p-2 m-10 text-white font-bold">
          {questionsData &&
            questionsData[currentPlayer === 1 ? user1Count : user2Count]
              ?.question}
        </div>
        {questionsData &&
          questionsData[
            currentPlayer === 1 ? user1Count : user2Count
          ]?.answers?.map((answer, i) => {
            return (
              <button
                key={i}
                value={answer}
                onClick={selectedAnswer}
                className="w-[80%] h-[30px] bg-yellow-300 border-1 border-2 m-2"
              >
                {answer}
              </button>
            );
          })}
      </div>
      <div className="flex justify-end">
        <button className="w-12 h-12 bg-purple-400 rounded-full  m-2">
          {currentPlayer === 1
            ? `${user1Count + 1}/10`
            : `${user2Count + 1}/10`}
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
