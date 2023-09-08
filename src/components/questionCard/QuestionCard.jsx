// // import React, { useEffect, useState } from "react";
// // import "./QuestionCard.css";

// // const QuestionCard = ({
// //   count,
// //   setCount,
// //   score,
// //   questionsData,
// //   title,
// //   setModal,
// //   modal,
// //   handleAnswer,
// //   activePlayer,
// //   switchPlayer,
// // }) => {
// //   const [timer, setTimer] = useState(5);

// //   const selectedAnswer = (e) => {
// //     const selectedOption = e.currentTarget.value;
// //     const isCorrect = selectedOption === questionsData[count]?.correct_answer;

// //     handleAnswer(isCorrect);
// //   };

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (timer > 0) {
// //         setTimer(timer - 1);
// //       }

// //       if (timer === 0 && count < 9) {
// //         switchPlayer();
// //         setTimer(30);
// //       } else if (count >= 9) {
// //         setModal(true);
// //       }
// //     }, 1000);

// //     return () => {
// //       clearInterval(interval);
// //     };
// //   }, [timer, count, setModal, switchPlayer]);

// //   return (
// //     <div className="flex flex-col w-[100%] h-[100%] bg-pink-400 shadow-pink-700 shadow-inner">
// //       <div className="flex flex-col w-full h-[80%] items-center">
// //         <div className="flex justify-center items-center w-20 h-20 rounded-full bg-purple-700 shadow-2xl p-5">
// //           <div className="flex justify-center items-center w-12 h-12 rounded-full bg-pink-900 shadow-xl p-3">
// //             <p className="text-white font-bold">{timer}</p>
// //           </div>
// //         </div>
// //         <div className="font-bold">{title}</div>
// //         <div className="flex w-[80%] h-[30%] bg-pink-950 rounded-md mb-3 mt-4 justify-center items-center p-2 m-10 text-white font-bold">
// //           {questionsData && questionsData[count]?.question}
// //         </div>
// //         {questionsData &&
// //           questionsData[count]?.answers?.map((answer, i) => {
// //             return (
// //               <button
// //                 key={i}
// //                 value={answer}
// //                 onClick={selectedAnswer}
// //                 className="w-[80%] h-[30px] bg-yellow-300 border-1 border-2 m-2"
// //               >
// //                 {answer}
// //               </button>
// //             );
// //           })}
// //       </div>
// //       <div className="flex justify-end">
// //         <button className="w-12 h-12 bg-purple-400 rounded-full m-2">{`${
// //           count + 1
// //         }/10`}</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuestionCard;
// import React, { useEffect, useState } from "react";
// import "./QuestionCard.css";

// const QuestionCard = ({
//   count,
//   setCount,
//   scorePlayer1,
//   scorePlayer2,
//   questionsData,
//   title,
//   setModal,
//   modal,
//   activePlayer,
//   switchPlayer,
// }) => {
//   const [timer, setTimer] = useState(30);

//   const selectedAnswer = (e) => {
//     const selectedOption = e.currentTarget.value;
//     const isCorrect = selectedOption === questionsData[count]?.correct_answer;

//     if (isCorrect) {
//       if (activePlayer === "player1") {
//         scorePlayer1 += 100; // player1'in skorunu güncelle
//       } else if (activePlayer === "player2") {
//         scorePlayer2 += 100; // player2'in skorunu güncelle
//       }
//     }

//     setCount(count + 1);
//     setTimer(30);

//     // Soruların sonuna geldiğinizde veya başka bir koşulda sırayı değiştirin
//     if (count >= 9) {
//       switchPlayer();
//       setCount(0);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (timer > 0) {
//         setTimer(timer - 1);
//       }

//       if (timer === 0 && count < 9) {
//         switchPlayer();
//         setTimer(30);
//       } else if (count >= 9) {
//         setModal(true);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [timer, count, setModal, switchPlayer]);

//   return (
//     <div className="flex flex-col w-[100%] h-[100%] bg-pink-400 shadow-pink-700 shadow-inner">
//       <div className="flex flex-col w-full h-[80%] items-center">
//         {/* Diğer içerik */}
//       </div>
//       <div className="flex justify-end">
//         <button className="w-12 h-12 bg-purple-400 rounded-full m-2">{`${
//           activePlayer === "player1" ? scorePlayer1 : scorePlayer2
//         }`}</button>
//         <button className="w-12 h-12 bg-purple-400 rounded-full m-2">{`${
//           count + 1
//         }/10`}</button>
//       </div>
//     </div>
//   );
// };

// export default QuestionCard;
// QuestionCard.js
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
  const [timer, setTimer] = useState(30);

  const selectedAnswer = (e) => {
    const selectedOption = e.currentTarget.value;
    const isCorrect = selectedOption === questionsData[count]?.correct_answer;

    handleAnswer(isCorrect);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0 && count < 9) {
        switchPlayer();
        setTimer(30);
      } else if (count >= 9) {
        setModal(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, count, setModal, switchPlayer]);

  return (
    <div className="flex flex-col w-[100%] h-[100%] bg-pink-400 shadow-pink-700 shadow-inner">
      <div className="flex flex-col w-full h-[80%] items-center">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-purple-700 shadow-2xl p-5">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-pink-900 shadow-xl p-3">
            <p className="text-white font-bold">{timer}</p>
          </div>
        </div>
        <div className="font-bold">{title}</div>
        <div className="flex w-[80%] h-[30%] bg-pink-950 rounded-md mb-3 mt-4 justify-center items-center p-2 m-10 text-white font-bold">
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
