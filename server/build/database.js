"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'ng_games_db'
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("connected succesfully!");
});
exports.default = con;
