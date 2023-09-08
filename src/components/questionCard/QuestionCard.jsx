/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./QuestionCard.css";

const QuestionCard = ({
  count,
  setCount,
  scorePlayer1,
  scorePlayer2,
  questionsData,
  title,
  setModal,
  modal,
  handleAnswer,
  activePlayer,
  switchPlayer,
}) => {
  const [timer, setTimer] = useState(10);
  const [isEndTimer, setIsEndTimer] = useState(false);
  const [myInterval, setMyInterval] = useState(null);

  const selectedAnswer = (e) => {
    const selectedOption = e.currentTarget.value;
    const isCorrect = selectedOption === questionsData[count]?.correct_answer;
    handleAnswer(isCorrect);
    setIsEndTimer(true);
  };

  // create timer
  useEffect(() => {
    if(!isEndTimer){
      console.log("timer yeniden 10 oldu");
      setTimer(10);
    } else {
      console.log("eski timer kapatıldı ",myInterval);
      clearInterval(myInterval);
      setInterval(null);
      setIsEndTimer(false);
    }

    return () => {
      console.log("interval kapatıldı component");
      setInterval(null);
      clearInterval(myInterval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEndTimer]);

  useEffect(() => {
    if(timer === 0){
      handleAnswer(false);
      switchPlayer();
      setIsEndTimer(true);
    }
    // soru değişti - yeni soru için yeni sayaç
    if(timer === 10){
      console.log("interval açıldı");
      setMyInterval(
        setInterval(() => {
          if (timer > 0) {
            setTimer((prev) => prev - 1);
          }
          console.log("intervall", timer);
        }, 1000)
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[timer]);

  useEffect(() => {
    if(count > 9){
      setModal(true);
    }
  },[count])

  return (
    <div className="flex flex-col w-[100%] h-[100%] bg-pink-400 shadow-pink-700 shadow-inner">
      <div className="flex flex-col w-full h-[80%] items-center">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-purple-700 shadow-2xl p-5">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-pink-900 shadow-xl p-3">
            <p className="text-white font-bold">{timer}</p>
          </div>
        </div>
        <div className="font-bold">{title}</div>
        <div className="flex w-[80%] h-[10%] bg-pink-950 rounded-md mb-3 mt-4 justify-center items-center p-2 m-10 text-white font-bold">
          {questionsData && questionsData[count]?.question}
        </div>
        {questionsData &&
          questionsData[count]?.answers?.map((answer, i) => {
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
        <button className="w-12 h-12 bg-purple-400 rounded-full m-2">{`${
          activePlayer === "player1" ? scorePlayer1 : scorePlayer2
        }`}</button>
        <button className="w-12 h-12 bg-purple-400 rounded-full m-2">{`${
          count + 1
        }/10`}</button>
      </div>
    </div>
  );
};

export default QuestionCard;
