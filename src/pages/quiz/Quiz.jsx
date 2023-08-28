import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";
import LoadingIcons from "react-loading-icons";
const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
      setLoading(false);
    };

    getData();
  }, []);
  console.log("Sorular:", questionsData);
  return (
    <div className="flex">
      {loading ? (
        <div className=" flex   w-full h-[100vh] items-center justify-center bg-purple-700 ">
          <LoadingIcons.Circles />
        </div>
      ) : (
        <div className="w-[100%] h-[100vh] bg-purple-400 flex items-center justify-center">
          {modal ? (
            <Modal score={score} />
          ) : (
            <QuestionCard
              questionsData={questionsData}
              score={score}
              count={count}
              modal={modal}
              setScore={setScore}
              setCount={setCount}
              setModal={setModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
