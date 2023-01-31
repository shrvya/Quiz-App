
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Home from './Home'
import Quiz from './Quiz';
function App() {

  return (
    <div className="App">
     
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      
    </div>
  );
}

export default App;
