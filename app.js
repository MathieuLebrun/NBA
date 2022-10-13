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

app.use('/stuff', express.static('stuff'));

app.use(express.static(__dirname + 'stuff'));



app.get('/home', function(req,res){
    res.render('home');
});

app.get('/', function(req,res){
    res.render('conn');
});

app.post('/', urlencodedParser, function(req,res){
    console.log(req.body);

    //insert element dans BD
    conn.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (Nom, Prenom, Email, Mdp) VALUES ('"+req.body.nom+"','"+req.body.prenom+"','"+req.body.email+"','"+req.body.mdp+"');";
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });

    res.render('conn-success', {data: req.body});
});

app.get('/connexion', function(req,res){
    res.render('connexion');
});

app.post('/connexion', urlencodedParser,function(req,res){
    console.log(req.body);

    conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM users WHERE Email = '"+req.body.email+"' AND Mdp = '"+req.body.mdp+"';";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        });
    });

    res.render('home',{data: req.body});
});

app.get('/nav',function(req,res){
    res.render('partials/nav');
});
app.get('/profile/:name',function(req,res){
    var data = {age:21, job: 'ninja', hobbies: ['manger','pecher', 'lire']};
    res.render('profile',{person: req.params.name,data: data});
});


app.listen(3000);


