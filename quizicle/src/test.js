export default function Test(props) {

    return (
      <div>
          <h5 className="question">{props.questionText}</h5>
          <div className="options-parent">
            <div className="options">
            {props.answerOptions&&props.answerOptions.map((que)=>{
        return (<button key={que.oid}  
        onClick={()=>props.handleAnswer(que.isCorrect,que.answerText,props.qId,que.oid)}
        
         className={`button-${props.qId}-${que.oid}-${props.colors}`}>{(que.answerText)}</button>)          
    })}
            </div>
         
          </div>
      </div>
     
    );
  }