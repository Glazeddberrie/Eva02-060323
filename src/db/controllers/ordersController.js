const conn = require('../connection.js');

const TABLA = "orders";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA} WHERE id = ?`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function create(id, creationDate, serial, price, email) {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO ${TABLA} VALUES (?, ?, ?, ?, ?, ?, ?)`
        , [null, id, creationDate, serial, price, email], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function deleteOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM ${TABLA} WHERE id = ?;`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function updateById(id, creationDate, serial, price, email, id) {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE ${TABLA} SET creationDate =?, serial =?, price =?, email =? WHERE id =?`, [id, creationDate, serial, price, email, id], (error, result) => {
            return error? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneById, create, deleteOneById, updateById };