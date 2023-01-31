import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Categories from '../../Data/Categories'
import ErrorMessage from "../../components/ErrorMessage";
export default function Home({ name, setName,fetchQuestions }) {
  console.log(name);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
   
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
          setError(true);
          return;
        } else {
          setError(false);
          fetchQuestions(category, difficulty);
          navigate("/quiz");
        }
      };
  return (
    <div className="content">
      <div className="settings">
        <span>Quiz Setting</span>
        <div className="settings_select">
            {error&&<ErrorMessage props={"Please enter all details"}/>}
        <TextField id="outlined-basic" 
        label="Enter Name"
        variant="outlined" 
        onChange={(e)=>setName(e.target.value)}/>
        <TextField
            select
            value={category}
            label="Select Category"
            variant="outlined"
            onChange={(e)=>setCategory(e.target.value) }
          >
            {Categories.map((cat)=>(
                 <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
               </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            value={difficulty}
            label="Select Difficulty"
            variant="outlined"
            onChange={(e)=>setDifficulty(e.target.value)}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button> 
        </div>
      </div>
      <img src="/quiz.svg" alt="image" className="banner" />
    </div>
  );
}
