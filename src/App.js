import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';
import { useState } from 'react';
import axios from 'axios';


export default function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async(category = "", difficulty = "") => {

    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Switch>
      <Route path="/" exact>
        <Home  name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}/>
      </Route>
      <Route path="/quiz" exact>
        <Quiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>
      </Route>
      <Route path="/result" >
        <Result  name={name} score={score}/>
      </Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

 
