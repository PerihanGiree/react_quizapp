const suffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}`;

  const data = await (await fetch(url)).json();

  return data.results.map((dt) => ({
    ...dt,
    answers: suffleArray([...dt.incorrect_answers, dt.correct_answer]),
  }));
};
