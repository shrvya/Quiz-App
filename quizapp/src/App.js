import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useState } from "react";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = " ", difficulty = " ") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setQuestions={setQuestions}
                setScore={setScore}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={<Result name={name} score={score} />}
          ></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
