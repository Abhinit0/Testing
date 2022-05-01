import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// var express = require('express')

// var app = express()

// app.use(cors())
// const cors = require("cors");
// app.use(require("cors")());

// app.use(
//   cors({
//     origin: ["http://localhost:8086", "http://localhost:8080/*"],
//     credentials: true
//   })
// );
// app.post("/images", upload.single("file"), function(req, res, next) {
//   console.log(req.file);

//   sharp(req.file.path)
//     .resize(200, 200)
//     .toBuffer(function(err, buffer) {
//       fs.writeFile(req.file.path, buffer, function(e) {});
//     });
//   res.send({ filename: req.file.filename });
//   // res.sendStatus(200);
// }); 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
