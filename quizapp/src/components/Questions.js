import { useState } from "react";
import ErrorMessage from "../../src/components/ErrorMessage";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './Question.css'
const Questions = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions
}) => {
    const navigate = useNavigate();
    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };
    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
      };
      const handleQuit = () => {
        
        navigate("/");
      };

      const handleNext = () => {
        if (currQues===9) {
            navigate("/result");
          }
        else if(selected && currQues<11){
            setCurrQues(currQues+1)
            setSelected();
        }
        else setError(true);
      };
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues]?.question}</h2>
        <div className="options">
          {error && <ErrorMessage props={"Please enter all details"} />}
          {options &&
            options.map((i) => (
              <button
              className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                onClick={()=>handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}

        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={() => handleNext()}
          >
            {currQues ===9 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Questions;
