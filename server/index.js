const express = require("express");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const ProblemModel = require("./models/problems");

const cors = require("cors");
const { response } = require("express");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://malchu:malchu@chucode.e7ldrkb.mongodb.net/chucode?retryWrites=true&w=majority")

app.get('/');

app.get("/getProblems", (req, res) => {
    ProblemModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
  
  app.post("/createProblem", async (req, res) => {
    const problem = req.body;
    const newProblem = new ProblemModel(problem);
    await newProblem.save();
  
    res.json(problem);
  });

  const url = "https://leetcode.com/problemset/all/";

  const port = process.env.PORT || 3000;

  const http = require('http');
  
  const server = http.createServer((res, req) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  });
  server.listen(port, '0.0.0.0');