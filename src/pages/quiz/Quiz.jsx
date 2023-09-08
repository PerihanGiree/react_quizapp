// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import QuestionCard from "../../components/questionCard/QuestionCard";
// import Modal from "../../components/modal/Modal";
// import LoadingIcons from "react-loading-icons";
// import * as api from "../../api/api";

// const Quiz = () => {
//   const { difficulty } = useParams();
//   const [questionsData, setQuestionsData] = useState([]);
//   const [scorePlayer1, setScorePlayer1] = useState(0);
//   const [scorePlayer2, setScorePlayer2] = useState(0);
//   const [count, setCount] = useState(0);
//   const [modal, setModal] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [activePlayer, setActivePlayer] = useState("player1");

//   useEffect(() => {
//     const getData = async () => {
//       const data = await api.fetchQuizData(difficulty, 20);
//       setQuestionsData(data);
//       setLoading(false);
//     };

//     getData();
//   }, [difficulty]);

//   const switchPlayer = () => {
//     setActivePlayer(activePlayer === "player1" ? "player2" : "player1");
//   };

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       if (activePlayer === "player1") {
//         setScorePlayer1(scorePlayer1 + 100);
//       } else if (activePlayer === "player2") {
//         setScorePlayer2(scorePlayer2 + 100);
//       }
//     }

//     setCount(count + 1);

//     if (count === 9) {
//       setModal(true);
//     } else {
//       switchPlayer();
//     }
//   };

//   return (
//     <div className="flex flex-row">
//       <div className="flex flex-col bg-purple-600 w-full h-[100vh]">
//         <div className="flex m-10 justify-center items-center">
//           {loading ? (
//             <div className="flex justify-center items-center mt-40">
//               <LoadingIcons.Circles />
//             </div>
//           ) : (
//             <div className="flex w-full h-full justify-center">
//               {modal ? (
//                 <Modal
//                   scorePlayer1={scorePlayer1}
//                   scorePlayer2={scorePlayer2}
//                 />
//               ) : (
//                 <QuestionCard
//                   title={
//                     activePlayer === "player1" ? "OYUNCU BİR" : "OYUNCU İKİ"
//                   }
//                   questionsData={questionsData}
//                   score={
//                     activePlayer === "player1" ? scorePlayer1 : scorePlayer2
//                   }
//                   count={count}
//                   setCount={setCount}
//                   modal={modal}
//                   handleAnswer={handleAnswer}
//                   activePlayer={activePlayer}
//                   switchPlayer={switchPlayer}
//                 />
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;
// Quiz.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Modal from "../../components/modal/Modal";
import LoadingIcons from "react-loading-icons";
import * as api from "../../api/api";

const Quiz = () => {
  const { difficulty } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activePlayer, setActivePlayer] = useState("player1");

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, 20);
      setQuestionsData(data);
      setLoading(false);
    };

    getData();
  }, [difficulty]);

  const switchPlayer = () => {
    setActivePlayer(activePlayer === "player1" ? "player2" : "player1");
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      if (activePlayer === "player1") {
        setScorePlayer1(scorePlayer1 + 100);
      } else {
        setScorePlayer2(scorePlayer2 + 100);
      }
    }

    setCount(count + 1);

    if (count === 9) {
      setModal(true);
    } else {
      switchPlayer();
    }
  };

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
                <Modal
                  scorePlayer1={scorePlayer1}
                  scorePlayer2={scorePlayer2}
                />
              ) : (
                <QuestionCard
                  title={
                    activePlayer === "player1" ? "OYUNCU BİR" : "OYUNCU İKİ"
                  }
                  questionsData={questionsData}
                  score={
                    activePlayer === "player1" ? scorePlayer1 : scorePlayer2
                  }
                  count={count}
                  setCount={setCount}
                  modal={modal}
                  handleAnswer={handleAnswer}
                  activePlayer={activePlayer}
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
