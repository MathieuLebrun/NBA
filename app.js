const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//connexion BD
var mysql = require('mysql');

var conn = mysql.createConnection({
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'nba'
});

app.set('view engine','ejs');

app.use('/css', express.static('css'));

app.use(express.static(__dirname + 'css'));


//Page connexion

app.get('/', function(req,res){
    res.render('connexion');
});

app.post('/', urlencodedParser,function(req,res){
    console.log(req.body);

    //select element BD
    conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM users WHERE Email = '"+req.body.email+"' AND Mdp = '"+req.body.mdp+"';";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        });
    });

    res.render('home');//,{data: req.body}
});


//Page inscription
app.get('/inscription', function(req,res){
    res.render('inscription');
});

app.post('/inscription', urlencodedParser, function(req,res){
    console.log(req.body);

    //insert element BD
    conn.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (Nom, Prenom, Email, Mdp) VALUES ('"+req.body.nom+"','"+req.body.prenom+"','"+req.body.email+"','"+req.body.mdp+"');";
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });

    res.render('connexion', {data: req.body});
});

//Page home

app.get('/home', function(req,res){
    res.render('home');
});

//Page contact

app.get('/contact', function(req,res){
    res.render('contact');
});

//nav

app.get('/nav',function(req,res){
    res.render('partials/nav');
});


app.listen(3000);


