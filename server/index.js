const express = require("express");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const ProblemModel = require("./models/problems");
import router from "./Routes/routes.js";

const cors = require("cors");
const { response } = require("express");

const corsOptions = {
  origin: "https://chucode.onrender.com"
}
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/", router);

const startServer = async () => {
  try {
      mongoose.connect("mongodb+srv://malchu:malchu@chucode.e7ldrkb.mongodb.net/chucode?retryWrites=true&w=majority").then(() => {
        const PORT= process.env.PORT || 8000
        app.listen(PORT, () => {
          console.log("Malchu");
        });
      }).catch(err => {
        console.log(err);
      });

      app.listen(8080, () =>
          console.log("Server started on port http://localhost:8080"),
      );
  } catch (error) {
      console.log(error);
  }
};

startServer();

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
