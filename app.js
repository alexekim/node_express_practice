var express = require('express');
var path = require('path');
var handlebars = require('hbs');

var app = express();

var japanese = {
  hello: "konnichiwa!",
  goodbye: "sayonara!",
  thankYou: "arigatou!",
  seeYou: "matane!",
  no: "iie",
  yes: "hai.",
  cheers: "kanpai!",
  whatsUp: "choushi wa dou",
  japanese: "nihongo",
  welcomeMessage: "welcome. go to this domain + /japanese to view the JSON object of a few words and how to say them in Japanese!"
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//must be specific for route??
app.all('/japanese/json', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://www.lung.org");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

app.get('/japanese', function(req,res){
  var arrayOfKeys = Object.keys(japanese);
  res.render('index', {japanese: japanese.welcomeMessage, array: arrayOfKeys});
})

app.get('/japanese/json', function(req,res){
  res.json(japanese);
})

app.get('/japanese/hello', function(req,res){
  res.json(japanese.hello);
})

app.get('/japanese/goodbye', function(req,res){
  res.json(japanese.goodbye);
})
app.get('/japanese/thankyou', function(req,res){
  res.json(japanese.thankYou);
})
app.get('/japanese/seeyou', function(req,res){
  res.json(japanese.seeYou);
})
app.get('/japanese/no', function(req,res){
  res.json(japanese.no);
})
app.get('/japanese/yes', function(req,res){
  res.json(japanese.yes);
})
app.get('/japanese/cheers', function(req,res){
  res.json(japanese.cheers);
})
app.get('/japanese/whatsup', function(req,res){
  res.json(japanse.whatsUp);
})


app.listen(3000, function(){
  console.log('now listening on port 3000!');
})
