import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";
import LoadingIcons from "react-loading-icons";
const Quiz = () => {
  const { difficulty, amount, category } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount, category);
      setQuestionsData(data);
      setLoading(false);
    };

    getData();
  }, []);
  console.log("Sorular:", questionsData);
  return (
    <div className=" flex flex-col bg-purple-600 w-full h-[100vh]">
      <div className=" flex m-10 justify-center items-center ">
        {loading ? (
          <div className="flex justify-center items-center mt-40   ">
            <LoadingIcons.Circles />
          </div>
        ) : (
          <div className=" flex w-full h-full justify-center">
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
    </div>
  );
};

export default Quiz;
