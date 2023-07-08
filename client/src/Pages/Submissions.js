import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

function Submissions() {
  // Fields
  const [listOfProblems, setListOfProblems] = useState([])
  const [name, setName] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [duration, setDuration] = useState(0)
  const [attempts, setAttempts] = useState("")

  // retrieve data from MongoDB
  useEffect(() => {
    Axios.get("https://chucode-backend.onrender.com/getProblems").then((response) => {
      setListOfProblems(response.data)
    });
  }, [])

  // functions
  const createProblem = () => {
    Axios.post("https://chucode-backend.onrender.com/createProblem", {
      name, 
      difficulty, 
      duration,
      attempts,
    }).then((response) => {
      setListOfProblems([...listOfProblems, {
        name, 
        difficulty,
        duration,
        attempts,
      }])
    })
  }
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
    <body>
      <div className="App">
        <div className="problemsDisplay">
          {listOfProblems.map((problem) => {
            return (
              <div className='container'>
                <div className='card'>
                  <p>Name: {problem.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Difficulty: {problem.difficulty} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration: {problem.duration}min &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category: {problem.attempts}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className='title'>
          
        </div>

        <div className='inputContainer'>
          <input className='textbox' type="text" id='input' placeholder='Problem Name' onChange={(event) => {
            setName(event.target.value)}}></input>
          <input className='textbox' type="text" id='input' placeholder='Difficulty' onChange={(event) => {
            setDifficulty(event.target.value)}}></input>
          <input className='textbox' type="number" id='input' placeholder='Duration (minutes)' onChange={(event) => {
            setDuration(event.target.value)}}></input>
          <input className='textbox' type="text" id='input' placeholder='Category' onChange={(event) => {
            setAttempts(event.target.value)}}></input>
          <button className='createProblem' onClick={createProblem}>Add</button>
        </div>
      </div>
      </body>
  )
}

export default Submissions;