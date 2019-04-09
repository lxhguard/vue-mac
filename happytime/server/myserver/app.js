var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//解决跨域
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  //返回数据格式为json字符串
  // res.header("Content-Type", "application/json;charset=utf-8");
  //返回数据格式设置为html文档
  res.header("Content-Type", "text/html;charset=utf-8");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//下面这个不好用，注释掉，重新写
// app.engine("html", require("ejs").renderFile);
// app.set('view engine', 'html');
//第一个参数:模板引擎的名称，同时也是模板文件的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html', swig.renderFile);
//设置模板文件存放的目录，第一个参数是views，第二个参数是目录
app.set('views', './views');
//注册所使用的模板引擎，第一个参数必须是 view engine ,第二个参数是app.engine
//这个方法定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//连接数据库
mongoose.connect('mongodb://localhost:27019/blog', function (err) {
  if (err) {
    console.log(err);
    console.log('数据库连接失败！');
  } else {
    console.log("数据库连接成功！");
  }
});


module.exports = app;
