var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: 'ng_games_db'
});

// check if there's an error
con.connect(function(err){
    if (err) throw err;
    console.log("connected succesfully!");
});

export function getConection(){
    return con;
}



