const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database/zabank_database.sqlite');

db.run(`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, email VARCHAR, password VARCHAR, picture INTEGER)`);

db.close();