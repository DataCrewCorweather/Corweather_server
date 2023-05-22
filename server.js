const express = require('express');
const app = express();
//서버 포트
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors"); //동일기원 (동일 주소)가 아니면 연결이 안되는 옵션을 해제할 수 있음
const connect = require("./schemas");

connect();

const corsOptions = {
  origin: true,
  credentials: true
};

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "corweather",
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);

app.use(cors(corsOptions));

app.use(express.json()); //json 파일을 위함
app.use(express.urlencoded({ extended: true })); //배열 설정을 위함

// router란? server.js 에서 모든 작업을 하기에는 적절하지 않음
// 그래서 router로 분리함
app.use("/weather", require("./routes/weatherRouter"));


app.listen(
    PORT, () => {console.log('Server On: http://localhost:4000/');
})


// mongoose.connect("mongodb+srv://seyeon:1q2w3e4r@cluster0.5ttxdtv.mongodb.net/?retryWrites=true&w=majority")
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));