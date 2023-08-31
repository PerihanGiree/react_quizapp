const suffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount, category) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;

  const data = await (await fetch(url)).json();

  return data.results.map((dt) => ({
    ...dt,
    answers: suffleArray([...dt.incorrect_answers, dt.correct_answer]),
  }));
};
