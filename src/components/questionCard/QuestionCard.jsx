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
    <div className="questionCard">
      <div className="questionCard-timer">
        <p>{timer}</p>
      </div>
      <div className="questionCard-title">
        {count + 1}/10 -{questionsData[count]?.question}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => {
        return (
          <button key={i} value={answer} onClick={selectedAnswer}>
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionCard;
