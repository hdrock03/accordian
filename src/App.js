import logo from './logo.svg';
import './App.css';
import data from './data'
import { useEffect, useState } from 'react';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState([])

  useEffect ( () => {
    setQuestions(data)
  },[])

  // const handleClick = (id) => {
  //   const selectedQues = data.filter((item) => item.id === id)
  //   console.log(selectedQues);
  //   setShowInfo(selectedQues)
  // }

  return (
    <div className="App">
      <div className='container'>
      <p className='topic'>Question and Answer about logic</p>
      <div className='ques'>
      {questions.map((question) => (
        <Question question={question} />
      ))}
      </div>
      </div>
      
    </div>
  );
}

export default App;
