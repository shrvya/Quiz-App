
 import {  Route, useNavigate,  Routes} from "react-router-dom";
import Quiz from "./Quiz";
export default function Home() {
    const navigate = useNavigate();
    
    const redirectToHome = () => {
        navigate("/Quiz");
      };
    return (
      <div className="App-home">
        <h2>QUIZZICLE</h2>
        <button
          onClick={redirectToHome}
        >
          Home
        </button>
        
      </div>
    );
  }

  