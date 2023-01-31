import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Quiz.css";
import Questions from "../../components/Questions";
export default function Quiz({
  name,
  questions,
  score,
  setQuestions,
  setScore,
}) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    questions[currQues]?.incorrect_answers.push(
      questions[currQues]?.correct_answer
    );
    setOptions(questions[currQues]?.incorrect_answers);
  }, [questions,currQues]);

//   console.log(questions[currQues]?.category);
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues]?.category}</span>
            <span>Score : {score}</span>
          </div>
          <Questions
           currQues={currQues}
           setCurrQues={setCurrQues}
           questions={questions}
           options={options}
           correct={questions[currQues]?.correct_answer}
           score={score}
           setScore={setScore}
           setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}
