require("dotenv").config({ path: "./config.env" });
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys');
const errorHandler = require('./middleware/error');


mongoose
  .connect(
    db.mongoURI,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(helmet());

 app.use(logger('dev'));

app.use(cors());

if (process.env.NODE_ENV === "production") {

  
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
    });
  }

  app.use("/api/auth",require("./router/auth"))
  app.use("/api/user",require('./router/post'));
  app.use('/api/comment',require('./router/comment'));

  app.use(errorHandler)

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`);
});

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged error ${err.message}`);
    server.close(() => process.exit());
});