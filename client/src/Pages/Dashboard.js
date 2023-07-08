import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import Axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'LeetCode Category Summary',
      color: 'white',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const options2 = {
  plugins: {
    title: {
      display: true,
      text: 'LeetCode Difficuly Spread',
      color: 'white',
    },
  },
  responsive: true,
};

export const options3 = {
  plugins: {
    title: {
      display: true,
      text: 'LeetCode Duration Spread (minutes)',
      color: 'white',
    },
  },
  responsive: true,
};

const labels = ['Arrays & Hashing', 'Two Pointers', 'Sliding Window', 'Stack', 'Binary Search', 'Linked List', 'Trees/Tries', 'Heap/PQ', 'Backtracking', 'Graphs', 'DP', 'Greedy', 'Intervals', 'Bit Manipulation'];

export function Dashboard() {
  // Fields
  const [listOfProblems, setListOfProblems] = useState([])
  const [name, setName] = useState("")
  const [difficulty, setDifficulty] = useState("")
  const [duration, setDuration] = useState(0)
  const [attempts, setAttempts] = useState("") 

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


  var easy = [];
  var med = [];
  var hard = [];
  {listOfProblems.map((problem) => {
    if (problem.difficulty == "Easy") {
      easy.push(problem);
    } else if (problem.difficulty == "Medium") {
      med.push(problem);
    } else {
      hard.push(problem);
    }
  })};

  var easyhash = {};
  easy.forEach((problem) => {
    if (problem.attempts in easyhash) {
      easyhash[problem.attempts] += 1;
    } else {
      easyhash[problem.attempts] = 1;
    }
  });

  var medHash = {};
  med.forEach((problem) => {
    if (problem.attempts in medHash) {
      medHash[problem.attempts] += 1;
    } else {
      medHash[problem.attempts] = 1;
    }
  });

  var hardHash = {};
  hard.forEach((problem) => {
    if (problem.attempts in hardHash) {
      hardHash[problem.attempts] += 1;
    } else {
      hardHash[problem.attempts] = 1;
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Easy',
        data: labels.map((label) => easyhash[label]),
        backgroundColor: 'rgb(0, 255, 136)',
      },
      {
        label: 'Medium',
        data: labels.map((label) => medHash[label]),
        backgroundColor: 'rgb(231, 168, 50)',
      },
      {
        label: 'Hard',
        data: labels.map((label) => hardHash[label]),
        backgroundColor: 'red',
      },
    ],
  };


  //Doughnut graph
  const donut = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: '# of Problems',
        data: [easy.length, med.length, hard.length],
        backgroundColor: [
          'rgb(0, 255, 136)',
          'rgb(231, 168, 50)',
          'rgba(255, 0, 0)',
        ],
        borderColor: [
          'rgb(0, 255, 136)',
          'rgb(231, 168, 50)',
          'red',
        ],
        borderWidth: 1,
      },
    ],
  };

  //pie graph
  var t1 = 0;
  var t2 = 0;
  var t3 = 0;
  easy.forEach((problem) => {
    t1 += problem.duration;
  });
  med.forEach((problem) => {
    t2 += problem.duration;
  });
  hard.forEach((problem) => {
    t3 += problem.duration;
  });

  const pie = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Average time spent',
        data: [t1/easy.length, t2/med.length, t3/hard.length],
        backgroundColor: [
          'rgb(0, 255, 136)',
          'rgb(231, 168, 50)',
          'rgba(255, 0, 0)',
        ],
        borderColor: [
          'rgb(0, 255, 136)',
          'rgb(231, 168, 50)',
          'red',
        ],
        borderWidth: 1,
      },
    ],
  };

  var hash = {};
  var best = "";
  var worst = "";
  {listOfProblems.map((problem) => {
    if (problem.attempts in hash) {
      hash[problem.attempts] += 1;
    } else {
      hash[problem.attempts] = 1;
    }
  })};
  var count = 0;
  var max = 0;
  var min = Number.MAX_SAFE_INTEGER;
  labels.forEach((label) => {
    if (hash[label] > max) {
      max = hash[label];
      best = label;
    }
    if (hash[label] < min) {
      min = hash[label];
      worst = label;
    }
  });

  return( 
    <body>
      <div id='chart'><Bar options={options} data={data} /></div>
      <div id='donut'><Doughnut options={options2} data={donut} /></div>
      <div id='pie'><Pie options={options3} data={pie} /></div>
      <div className='box'>
        <div className='tile'>Total problems completed: <br></br><h1>{easy.length + med.length + hard.length}</h1></div>
        <div className='tile'>Average duration per problem: <br></br><h1>{((t1 + t2 + t3)/(easy.length + med.length + hard.length)).toFixed(2)} minutes</h1></div>
        <div className='tile'>Best category: <br></br><h1>{best}</h1></div>
        <div className='tile'>Worst Category (min: 1): <br></br><h1>{worst}</h1></div>
      </div>
    </body>
  );
}

export default Dashboard;