import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Difficulty', minWidth: 100 },
  {
    id: 'population',
    label: 'Date',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'size',
    label: 'Duration (min)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Attempts',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(),
  },
  {
    id: 'force',
    label: 'Completed',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, code, population, size, density, force) {
  return { name, code, population, size, density, force};
}

const rows = [
  createData('Two Sum', 'Easy', "01/25/2023", 32, 2, "yes"),
  createData('House Robber', 'Easy', "01/24/2023", 35, 1, "yes"),
  createData('Contains Duplicate', 'Easy', "01/24/2023", 45, 3, "yes"),
  createData('Missing Number', 'Easy', "01/24/2023", 23, 2, "yes"),
  createData('Valid Anagram', 'Easy', "01/23/2023", 25, 2, "yes"),
  createData('Valid Palindrome', 'Easy', "01/22/2023", 36, 1, "yes"),
  createData('Valid Parentheses', 'Easy', "01/21/2023", 38, 3, "yes"),
  createData('Group Anagrams', 'Medium', "01/21/2023", 57, 4, "yes"),
  createData('Top k Frequent Elements', 'Medium', "01/20/2023", 67, 5, "yes"),
  createData('Number of 1 Bits', 'Easy', "01/18/2023", 43, 1, "yes"),
  createData('Product of Array Except Self', 'Medium', "01/18/2023", 53, 2, "yes"),
  createData('Best Time to Buy and Sell Stock', 'Easy', "01/18/2023", 35, 1, "yes"),
  createData('3Sum', 'Medium', "01/16/2023", 45, 3, "yes"),
  createData('Roman to Integer', 'Easy', "01/12/2023", 39, 2, "yes"),
  createData('Count good Triplets', 'Easy', "01/11/2023", 29, 1, "yes"),
];

function Submissions() {
  // Fields
  const [listOfProblems, setListOfProblems] = useState([])
  const [name, setName] = useState("")
  const [difficulty, setDifficulty] = useState("")
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var defaultDate = curr.toISOString().substring(0,10);
  const [date, setDate] = useState(defaultDate)
  const [duration, setDuration] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [completed, setCompleted] = useState("")  

  // retrieve data from MongoDB
  useEffect(() => {
    Axios.get("http://localhost:3001/getProblems").then((response) => {
      setListOfProblems(response.data)
    });
  }, [])

  // functions
  const createProblem = () => {
    Axios.post("http://localhost:3001/createProblem", {
      name, 
      difficulty, 
      date,
      duration,
      attempts,
      completed,
    }).then((response) => {
      setListOfProblems([...listOfProblems, {
        name, 
        difficulty, 
        date,
        duration,
        attempts,
        completed,
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
                  <h3>Name: {problem.name}</h3>
                  <h3>Difficulty: {problem.difficulty}</h3>
                  <h3>Date: {problem.date}</h3>
                  <h3>Duration: {problem.duration}</h3>
                  <h3>Attempts: {problem.attempts}</h3>
                  <h3>Completed: {problem.completed}</h3>
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
          <input className='textbox' type="date" id='input' placeholder='Date' onChange={(event) => {
            setDate(event.target.value)}}></input>
          <input className='textbox' type="number" id='input' placeholder='Duration (minutes)' onChange={(event) => {
            setDuration(event.target.value)}}></input>
          <input className='textbox' type="number" id='input' placeholder='Attempts' onChange={(event) => {
            setAttempts(event.target.value)}}></input>
          <input className='textbox' type="text" id='input' placeholder='Completed' onChange={(event) => {
            setCompleted(event.target.value)}}></input>
          <button className='createProblem' onClick={createProblem}>Add</button>
        </div>
      </div>

      <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#100e17' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: '#100e17', color: 'white', fontSize: 'large', fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{color: 'white'}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{color: 'white'}}
      />
    </Paper>
      </body>
  )
}

export default Submissions;