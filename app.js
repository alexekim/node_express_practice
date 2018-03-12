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
app.all('/japanese', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://www.lung.org");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

app.get('/', function(req,res){
  var arrayOfKeys = Object.keys(japanese);
  res.render('index', {japanese: japanese.welcomeMessage, array: arrayOfKeys});
})

app.get('/japanese', function(req,res){
  res.json(japanese);
})

app.get('/hello', function(req,res){
  res.json(japanese.hello);
})

app.get('/goodbye', function(req,res){
  res.json(japanese.goodbye);
})
app.get('/thankyou', function(req,res){
  res.json(japanese.thankYou);
})
app.get('/seeyou', function(req,res){
  res.json(japanese.seeYou);
})
app.get('/no', function(req,res){
  res.json(japanese.no);
})
app.get('/yes', function(req,res){
  res.json(japanese.yes);
})
app.get('/cheers', function(req,res){
  res.json(japanese.cheers);
})
app.get('/whatsup', function(req,res){
  res.json(japanse.whatsUp);
})


app.listen(3000, function(){
  console.log('now listening on port 3000!');
})
