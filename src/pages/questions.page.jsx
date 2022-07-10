import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from '@mui/system';
import useAxios from '../api/useAxios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleScoreChange } from '../redux/actions';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decode } from "html-entities";

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score,
  } = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(amount_of_questions, question_category, question_difficulty, question_type);

  let apiUrl = `/api.php?amount=${amount_of_questions}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  console.log(response);

  console.log(options);
  
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if(loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  const handleClickAnswer = (event) => {
    const question = response.results[questionIndex];

    if (event.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {//if it's the last question go to score(final screen)
      navigate("/score");
    }
  };
  
  return (
      <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>      
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
        <Box mt={5}>
          Score: 3/3
        </Box>
    </Box>
    )
  }
  
  export default Questions;