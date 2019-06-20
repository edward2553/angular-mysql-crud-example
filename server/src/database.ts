var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: 'ng_games_db'
});

con.connect(function(err: any){
    if (err) throw err;
    console.log("connected succesfully!");
});


export default con;


