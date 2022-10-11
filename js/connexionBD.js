const conn   = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'localhost',
    password        : 'password',
    database        : 'nodejs_beers'
})
    
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

export { conn };
