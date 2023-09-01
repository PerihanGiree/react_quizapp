import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";
import LoadingIcons from "react-loading-icons";
const Quiz = () => {
  const { difficulty, amount } = useParams();
  //  const [difficulty, setDifficulty] = useState("");
  const [questionsData, setQuestionsData] = useState([]);
  const [player1OuestionsData, setPlayer1QuestionsData] = useState([]);
  const [player2QuestionsData, setPlayer2QuestionsData] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
      setPlayer1QuestionsData(data.slice(0, 10));
      setPlayer2QuestionsData(data.slice(10, 20));
      setLoading(false);
    };

    getData();
  }, []);
  console.log("Sorular:", questionsData);
  console.log("1.", player1OuestionsData);
  console.log("2.", player2QuestionsData);
  return (
    <div className=" flex flex-row">
      <div className=" flex flex-col bg-purple-600 w-full h-[100vh]">
        <div className=" flex m-10 justify-center items-center ">
          {loading ? (
            <div className="flex justify-center items-center mt-40   ">
              <LoadingIcons.Circles />
            </div>
          ) : (
            <div className=" flex w-full h-full justify-center">
              {modal ? (
                <Modal score={score1} />
              ) : (
                <QuestionCard
                  questionsData={player1OuestionsData}
                  score={score1}
                  count={count}
                  modal={modal}
                  setScore={setScore1}
                  setCount={setCount}
                  setModal={setModal}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col bg-purple-600 w-full h-[100vh]">
        <div className=" flex m-10 justify-center items-center ">
          {loading ? (
            <div className="flex justify-center items-center mt-40   ">
              <LoadingIcons.Circles />
            </div>
          ) : (
            <div className=" flex w-full h-full justify-center">
              {modal ? (
                <Modal score={score2} />
              ) : (
                <QuestionCard
                  questionsData={player2QuestionsData}
                  score={score2}
                  count={count}
                  modal={modal}
                  setScore={setScore2}
                  setCount={setCount}
                  setModal={setModal}
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
