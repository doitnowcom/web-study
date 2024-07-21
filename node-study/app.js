const express = require('express');
const helmet = require("helmet");
const app = express();
const ejs = require("ejs")
const db = require('./model/db')
const json2xls = require('json2xls');

app.set('view engine', 'ejs');
app.set('views', './views')
app.use('/public',express.static(__dirname + '/public'));
 
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(json2xls.middleware);

const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)


db.sequelize.sync({ force: false }).then(() => {
    console.log("데이터베이스 동기화 완료");
    app.listen(3000, function() {
      console.log("서버가 실행되고 있다!");
    });
  }).catch(err => {
    console.error("데이터베이스 동기화 중 오류 발생:", err);
  });
