const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '970928',
    database: 'node_api_mysql'
})

module.exports = db