// Quiz.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../../components/questionCard/QuestionCard"; // QuestionCard bileşenini uygun şekilde import edin
import Modal from "../../components/modal/Modal"; // Modal bileşenini uygun şekilde import edin
import LoadingIcons from "react-loading-icons";
import * as api from "../../api/api"; // API işlemleri için uygun şekilde import edin

const Quiz = () => {
  const { difficulty } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [activePlayer, setActivePlayer] = useState("player1");
  const [player1QuestionsData, setPlayer1QuestionsData] = useState([]);
  const [player2QuestionsData, setPlayer2QuestionsData] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // switchPlayer fonksiyonu, oyuncu değişimini sağlar
  const switchPlayer = () => {
    setActivePlayer(activePlayer === "player1" ? "player2" : "player1");
  };

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, 20);
      setQuestionsData(data);
      setPlayer1QuestionsData(data.slice(0, 10));
      setPlayer2QuestionsData(data.slice(10, 20));
      setLoading(false);
    };

    getData();
  }, []);
  console.log(questionsData);
  console.log("1", player1QuestionsData);
  console.log("2", player2QuestionsData);
  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-purple-600 w-full h-[100vh]">
        <div className="flex m-10 justify-center items-center">
          {loading ? (
            <div className="flex justify-center items-center mt-40">
              <LoadingIcons.Circles />
            </div>
          ) : (
            <div className="flex w-full h-full justify-center">
              {modal ? (
                <Modal score={activePlayer === "player1" ? score1 : score2} />
              ) : (
                <QuestionCard
                  title={activePlayer === "player1" ? "PLAYER1" : "PLAYER2"}
                  questionsData={
                    activePlayer === "player1"
                      ? player1QuestionsData
                      : player2QuestionsData
                  }
                  score={activePlayer === "player1" ? score1 : score2}
                  count={count}
                  modal={modal}
                  setScore={activePlayer === "player1" ? setScore1 : setScore2}
                  setCount={setCount}
                  setModal={setModal}
                  switchPlayer={switchPlayer}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
