import questions from './questions';
import Button from "react-bootstrap/Button";
import Test from './test'
import { useState } from 'react';
export default function Quiz() {
const [score,setscore]=useState(0);
const [quest,setquest]=useState(0);
const [showScore, setShowScore] = useState(false);
const [active, setActive] = useState(false);
const [color, setColors] = useState("");
const [answer, setAnswer] = useState([]);
let handleAnswerOptionClick = (isCorrect,btnName,qid,optionId) => {
 
 setAnswer( [...answer, btnName]);
  if (isCorrect) { 
    setscore(score + 1);
    setActive(!active);
  }
  if(qid===1 && optionId===3  ||qid===2 && optionId===2 ||qid===3 && optionId===1 ||qid===4 && optionId===4)
    {
      setColors(btnName)
    }
  setquest(quest +1); 
};
let handleCheckOptionClick = () => {
  console.log("clickkk",quest)
  if(quest===4){
    setShowScore(true)
  }
 
 };

    return (
      <main>
        <header className='quiz'>
        <h2 className='quiz-title'>QUIZ</h2>
        </header>
          <div className='quiz-div'>
          {questions.map((que)=>{
        return (<Test key={que.qId} {...que}
            handleAnswer={handleAnswerOptionClick} 
            colors={color} activity={active}/> )          
    })}
          </div>
          {showScore?(<p>Your score is {score}</p>):""}
           {showScore?(<Button variant="primary">New Game</Button>):<Button  onClick={()=>handleCheckOptionClick()} variant="primary">check</Button>}
      </main>
     
    );
  }